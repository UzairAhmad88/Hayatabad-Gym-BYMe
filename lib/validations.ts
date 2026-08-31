import { z } from "zod";

export const joinSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  membership: z.string().optional(),
  goal: z.string().min(2, "Please select a fitness goal"),
  preferredTime: z.string().optional()
});

export const trialSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  date: z.string().optional(),
  time: z.string().optional(),
  goal: z.string().min(2, "Please select a fitness goal")
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(7, "Please enter a valid phone number").optional().or(z.literal("")),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  message: z.string().min(5, "Message must be at least 5 characters")
});

export const adminLoginSchema = z.object({
  username: z.string().min(3, "Username is required"),
  password: z.string().min(4, "Password is required")
});

export type JoinInput = z.infer<typeof joinSchema>;
export type TrialInput = z.infer<typeof trialSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
export type AdminLoginInput = z.infer<typeof adminLoginSchema>;
