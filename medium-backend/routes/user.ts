import { Hono } from "hono";
import { decode, sign, verify } from "hono/jwt";
import { signUpSchema, signinSchema } from "@ahmad-nadeem/medium-commons";

import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    header: string;
    userId: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signUpSchema.safeParse(body);
  console.log("success", success);
  if (!success) {
    return c.json({
      message: "error parsing body",
    });
  }

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });

  const payload = {
    userId: user.id,
  };
  const jwtToken = await sign(payload, c.env.JWT_SECRET);
  return c.json({ token: jwtToken });
  // return c.text("signup route!");
});

userRouter.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = signinSchema.safeParse(body);
  if (!success) {
    return c.json({
      message: "error parsing body",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    return c.json({ error: "user not found" });
  } else {
    const payload = {
      userId: user.id,
    };
    const jwtToken = await sign(payload, c.env.JWT_SECRET);
    return c.json({ token: jwtToken });
  }
});
