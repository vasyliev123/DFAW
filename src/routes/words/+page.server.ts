import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
    const words = await event.fetch('/api/words', {
        method: 'GET'
    }).then(res => res.json());
    return {
        words: words
    };
};