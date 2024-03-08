import type { RequestHandler } from '@sveltejs/kit';
import { getCollections } from '$lib/prisma';
import { JWT_ACCESS_SECRET } from '$env/static/private'
import jwt from 'jsonwebtoken';
export const GET: RequestHandler = async ({request}) => {
	
    const Header = request.headers.get('Authorization');
    if (!Header) {
        return new Response(JSON.stringify({error: 'Unauthorized'}), { status: 401, });
    }
    const token = Header.split(' ')[1];
    const user = jwt.verify(token, JWT_ACCESS_SECRET as string);
    if (typeof user === 'string') {
        return new Response(JSON.stringify({error: 'Unauthorized'}), { status: 401, });
    }
    const data = await getCollections(user.id);

    return new Response(JSON.stringify(data), { status: 200, });
};
