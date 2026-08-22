import {z} from "zod";

export const usernameVaildation = z.object({
    username: z
    .string()
    .min(3, {message: "Username must be at least 3 characters"})
    .max(20, {message: "Username must be less than 20 characters"})
    .regex(/^[a-zA-Z0-9_]+$/, {message: "Username can only contain letters, numbers, and underscores"}),
})

export const emailVaildation = z.object({
    email: z
    .string()
    .email({message: "Invalid email address"}),
})

export const passwordVaildation = z.object({
    password: z
    .string()
    .min(8, {message: "Password must be at least 8 characters"})
    .max(20, {message: "Password must be less than 20 characters"})
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"}),
})

export const registerValidation = z.object({
    username: usernameVaildation,
    email: emailVaildation,
    password: passwordVaildation,
})