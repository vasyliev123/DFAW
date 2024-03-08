import type { RequestHandler } from './$types';
import { getWord, getWords, createWord, deleteWord } from '$lib/db/crud.words';

export const GET: RequestHandler = async ({url}) => {
    const id = url.searchParams.get('id');
    if (id) {
        const word = await getWord(parseInt(id));
        const res = new Response(JSON.stringify(word));
        return res;
    }
    const words = await getWords();
    const res = new Response(JSON.stringify(words));
    return res;
};
export const POST: RequestHandler = async ({url}) => {
	const word = url.searchParams.get('word');
    if (!word) {
        return new Response('Word is required', { status: 400 });
    }
    const newWord = await createWord(word);
    const res = new Response(JSON.stringify(newWord));
    return res;
};

export const DELETE: RequestHandler = async ({url}) => {
	const id = url.searchParams.get('id');
    if (!id) {
        return new Response('ID is required', { status: 400 });
    }
    const word = await deleteWord(parseInt(id));
    const res = new Response(JSON.stringify(word));
    return res;
};
