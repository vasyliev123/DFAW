import type { PageServerLoad, Actions } from "./$types.js";
import { fail } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./schema";
import { zod } from "sveltekit-superforms/adapters";
import { addCollection } from "$lib/utils.js";
export const load: PageServerLoad = async ({fetch}) => {
    const collections = await fetch('/api/collections', {
        method: 'GET',
    }).then(res => res.json());
    return {
        form: await superValidate(zod(formSchema)),
        collections: collections
    };
};

export const actions: Actions = {
    default: async (event) => {
      const form = await superValidate(event, zod(formSchema));
      if (!form.valid) {
        return fail(400,
            {
                form
            });
      }
    const title = form.data.title;
    const collection = await addCollection({title, event});
        return {
            form,
            collection
        }
    },
};
