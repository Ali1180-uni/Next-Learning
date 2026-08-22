import { z } from "zod";

export const verifyCodeValidation = z.object({
  verifyCode: z.string().length(6, { message: "Verify code must be 6 digits" }),
});

export const verifyValidation = z.object({
  verifyCode: verifyCodeValidation,
});
