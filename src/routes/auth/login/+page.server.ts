import { superValidate } from "sveltekit-superforms";
import { formSchema } from "$lib/loginFormSchema";
import { zod } from "sveltekit-superforms/adapters";
import type { PageServerLoad, Actions } from "./$types";
import { fail } from "@sveltejs/kit";
import { loginUser } from "$lib/prisma";
import { redirect } from "@sveltejs/kit";
export const load: PageServerLoad = async (event) => {
	const user = event.locals.user;

	if (user) {
		throw redirect(302, '/');
	}
    return {
        form: await superValidate(zod(formSchema)),
    };
};

export const actions: Actions = {
    default: async (event) => {
        const formData = Object.fromEntries(await event.request.formData());
        const form = await superValidate(formData, zod(formSchema));
      if (!form.valid) {
        return fail(400, {
          form,
        });
      }
      const { email, password } = formData as { email: string, password: string};
      const { error, token } = await loginUser(email, password);

        if(error){
            return fail(400, {
              form,
              errors: error
            });
        }

        event.cookies.set('AuthorizationToken', `${token}`, {
            httpOnly: true,
            path: '/',
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7});
            
        return {
            form,
          };
    },
  };