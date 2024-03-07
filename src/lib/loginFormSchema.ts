import { z } from "zod";
 
export const formSchema = z.object({
    password: z.string().min(6, "Password must be at least 6 characters").max(50, "Password must be at most 50 characters"),
    email: z.string().email("Invalid email address")
});
 
export type loginFormSchema = typeof formSchema;