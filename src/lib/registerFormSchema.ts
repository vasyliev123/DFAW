import { z } from "zod";
 
export const formSchema = z.object({
    password: z.string().min(6).max(50),
    username: z.string().min(2).max(50),
    email: z.string().email(),
    errories: z.array(z.string())
});
 
export type registerFormSchema = typeof formSchema;