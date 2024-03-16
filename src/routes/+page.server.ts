import type { PageServerLoad } from "./collections/$types";
// import { superValidate } from "sveltekit-superforms";
// import { formSchema } from "./schema";
// import { zod } from "sveltekit-superforms/adapters";

export const load: PageServerLoad = async ({fetch}) => {
    const collections = await fetch('/api/collections', {
        method: 'GET',
    }).then(res => res.json());
    console.log(collections);
    return {
        collections: collections
    };
};

