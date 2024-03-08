import type { PageServerLoad } from "./$types";
import jwt from 'jsonwebtoken';
import { JWT_ACCESS_SECRET } from '$env/static/private'

export const load: PageServerLoad = async (event) => {
    const user = event.locals.user;
    if (!user) {
        return {
            status: 302,
            redirect: '/auth/login'
        };
    }

    const token = jwt.sign({id: user.id}, JWT_ACCESS_SECRET as string, {expiresIn: '1h'});
    const res = await event.fetch('/api/collections', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${token}`
        }
    });
    const collections = await res.json();
    console.log(collections);
    return {
        collections: collections
    };
};