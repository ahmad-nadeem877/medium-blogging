import { string, z } from "zod";

export const signUpSchema = z.object({
  email: string().email(),
  password: string(),
  name: string().optional(),
});

export const signinSchema = z.object({
  email: string().email(),
  password: string(),
});

export const createPostInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updatePostInput = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  id: z.number(),
});

// type inference from zod

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signinSchema>;
export type CreatePostInput = z.infer<typeof createPostInput>;
export type UpdatePostInput = z.infer<typeof updatePostInput>;
