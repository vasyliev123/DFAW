// import { zod } from 'sveltekit-superforms/adapters';
// import { formSchema as registerFormSchema } from '$lib/registerFormSchema';
// import { superValidate } from 'sveltekit-superforms';
// import type { Actions } from '@sveltejs/kit';
// import { fail, redirect } from '@sveltejs/kit';
// import { createUser } from '$lib/prisma';
// import { goto } from '$app/navigation';
// export const actions: Actions = {

// 	register: async (event) => {
		
// 		const formData = Object.fromEntries(await event.request.formData());
// 		const form = await superValidate(event, zod(registerFormSchema));
// 		if (!form.valid) {
// 			return fail(400, {
// 				form
// 			});
// 		}
// 		const { email, username, password } = formData as { email: string, username: string, password: string };

// 		const user = await createUser(email, username, password);
// 		if ('error' in user) {
// 			return fail(400, {
// 				errors: user.error
// 			});
// 		}

//         goto('/');
	 
// 	},
// 	// login: async (event: import('./$types').RequestEvent) => {
// 	// 	const form = await superValidate(event, zod(loginFormSchema));
// 	// 	if (!form.valid) {
// 	// 		return fail(400, {
// 	// 			form
// 	// 		});
// 	// 	}
// 	// 	return {
// 	// 		form
// 	// 	};
// 	// }
// };