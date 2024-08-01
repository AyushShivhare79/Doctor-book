import z from "zod";

export const otpBody = z.object({
  otp: z.string().max(6).min(6),
});

export type OtpBody = z.infer<typeof otpBody>;
