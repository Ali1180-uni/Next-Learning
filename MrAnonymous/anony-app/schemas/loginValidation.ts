import {z} from "zod";

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

export const loginValidation = z.object({
    email: emailVaildation,
    password: passwordVaildation,
})