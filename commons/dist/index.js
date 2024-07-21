"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostInput = exports.createPostInput = exports.signinSchema = exports.signUpSchema = void 0;
const zod_1 = require("zod");
exports.signUpSchema = zod_1.z.object({
    email: (0, zod_1.string)().email(),
    password: (0, zod_1.string)(),
    name: (0, zod_1.string)().optional(),
});
exports.signinSchema = zod_1.z.object({
    email: (0, zod_1.string)().email(),
    password: (0, zod_1.string)(),
});
exports.createPostInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
exports.updatePostInput = zod_1.z.object({
    title: zod_1.z.string().optional(),
    content: zod_1.z.string().optional(),
    id: zod_1.z.number(),
});
