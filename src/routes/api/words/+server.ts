import { error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_ACCESS_SECRET } from '$env/static/private'
import prisma from '$lib/prisma';
import { addWord } from '$lib/prisma';
export const POST: RequestHandler = async ({request, url}) => {
    
    // const authHeader = request.headers.get('Authorization');

    // if (!authHeader) {
    //     return error(401, 'Unauthorized');
    // }

    // const token = authHeader.split(' ')[1];

    // const jwtUser = jwt.verify(token, JWT_ACCESS_SECRET as string);

    // if (typeof jwtUser === 'string') {
    //     throw new Error('Access denied');
    // }

    // const user = await prisma.user.findUnique({
    //     where: {
    //         id: jwtUser.id
    //     }
    // });

    // if (!user) {
    //     return new Response(JSON.stringify({error: 'Invalid user'}), { status: 400, });
    // }
    const word = url.searchParams.get('word');
    if (!word) {
        return new Response(JSON.stringify({error: 'Specify a word to add'}), { status: 400, });
    }
    const collectionId = url.searchParams.get('collectionId');
    if (!collectionId) {
        return new Response(JSON.stringify({error: 'Specify a collection to add the word to'}), { status: 400, });
    }
    const newWord = await addWord(word, parseInt(collectionId));

    return new Response(JSON.stringify(newWord), { status: 200, });
}
