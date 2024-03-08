import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({url}) => {
	const word = url.searchParams.get('word');

	const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

	const data = await res.json();

    if (res.ok) {
        return new Response(JSON.stringify(data), { status: 200, });
    }
    return new Response(JSON.stringify(data), { status: 400, });
};
