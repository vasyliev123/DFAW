import type { RequestHandler } from './$types';
import {
	getCollection,
	getCollections,
	deleteCollection,
	createCollection,
	updateCollection
} from '$lib/db/crud.collections';


export const GET: RequestHandler = async ({ url }) => {
	const id = url.searchParams.get('id');
	if (id) {
		const collection = await getCollection(parseInt(id));
		const res = new Response(JSON.stringify(collection));
		return res;
	}
	const collections = await getCollections();
	const res = new Response(JSON.stringify(collections));
	return res;
};


export const POST: RequestHandler = async ({ request }) => {
	console.log('POST');
	try {
		const {title} = await request.json();
		if (!title) {
			console.log('Title is required');
			return new Response('Title is required', { status: 400 });
		}
		const collection = await createCollection(title);
		const res = new Response(JSON.stringify(collection));
		console.log('res', res);
		return res;
	} catch (error) {
		let message = 'Unknown Error'
		if (error instanceof Error) message = error.message
			return new Response(message, { status: 500 });
	}
};


export const PUT: RequestHandler = async ({ url }) => {
	const id = url.searchParams.get('id');
	const title = url.searchParams.get('title');
	if (!id || !title) {
		return new Response('ID and title are required', { status: 400 });
	}
	const collection = await updateCollection(parseInt(id), title);
	const res = new Response(JSON.stringify(collection));
	return res;
};


export const DELETE: RequestHandler = async ({ url }) => {
	const id = url.searchParams.get('id');
	if (!id) {
		return new Response('ID is required', { status: 400 });
	}
	const collection = await deleteCollection(parseInt(id));
	const res = new Response(JSON.stringify(collection));
	return res;
};
