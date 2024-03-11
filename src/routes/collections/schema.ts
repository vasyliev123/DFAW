import { z } from "zod";
 
export const formSchema = z.object({
  title: z.string().min(1).max(100, { message: "Title is invalide" }),
});
 
export type FormSchema = typeof formSchema;