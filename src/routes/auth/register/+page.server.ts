import { superValidate } from 'sveltekit-superforms';
import { formSchema } from '$lib/registerFormSchema';
import { zod } from 'sveltekit-superforms/adapters';
import type { PageServerLoad, Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { createUser } from '$lib/prisma';
import { loginUser } from '$lib/prisma';
export const load: PageServerLoad = async (event) => {
	const user = event.locals.user;

	if (user) {
		throw redirect(302, '/');
	}
	return {
		form: await superValidate(zod(formSchema))
	};
};

export const actions: Actions = {
	default: async (event) => {
		const formData = Object.fromEntries(await event.request.formData());
		const form = await superValidate(formData, zod(formSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		const { email, username, password } = formData as { email: string; username: string; password: string };
        
		const user = await createUser(email, username, password);
        console.log("11111111");

		if ('error' in user) {
            console.log(user.error);

			return fail(400, {
                form,
				errors: user.error
			});
		}
		const { error, token } = await loginUser(email, password);

		if (error) {
            console.log(error);
			return fail(400, {
                form,
				errors: error
			});
		}
        console.log("44444");
		event.cookies.set('AuthorizationToken', `${token}`, {
			httpOnly: true,
			path: '/',
			secure: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 7
		});

        return {
            form,
          };
	}
};
