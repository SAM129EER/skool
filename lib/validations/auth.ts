import { z } from "zod"

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters long" }),
  remember: z.boolean().optional(),
})

export type LoginFormData = z.infer<typeof loginSchema>

export const signupSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Full name is required" })
    .min(2, { message: "Name must be at least 2 characters long" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Service and Privacy Policy",
  }),
})

export type SignupFormData = z.infer<typeof signupSchema>
