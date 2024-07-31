import { z } from "zod";

export const signInBody = z.object({
  phoneNumber: z
    .string()
    .min(10, { message: "Invalid Number" })
    .max(10, { message: "Invalid Number" }),
  password: z
    .string()
    .min(7, { message: "Password must be more than 7" })
    .max(20, { message: "Password must be less than 20" }),
});

export type SignInBody = z.TypeOf<typeof signInBody>;
