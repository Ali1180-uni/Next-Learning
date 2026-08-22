import {z} from "zod";

export const msgVaildation = z.object({
    message: z
    .string()
    .min(1, {message: "Message must be at least 1 character"})
    .max(500, {message: "Message must be less than 500 characters"}),
})

export const messageValidation = z.object({
    message: msgVaildation,
    createdAt: z.date(),
})