import prisma from "$lib/prisma";
import type { Handle } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import { JWT_ACCESS_SECRET } from '$env/static/private';
import type { SessionUser } from "$lib/types/SessionUser";
export const handle: Handle = async ({ event, resolve }) => {

    const token = event.cookies.get("AuthorizationToken");

    if (token) {
  

        try {
            console.log(token);
            const jwtUser = jwt.verify(token, JWT_ACCESS_SECRET as string);
             
            if (typeof jwtUser === 'string') {
                throw new Error('Invalid token');
            }

            const user = await prisma.user.findUnique({
                where: {
                    id: jwtUser.id
                }
            });

            if (!user) {
                throw new Error('Invalid user');
            }

            const sessionUser: SessionUser = {
                id: user.id,
                email: user.email,
                username: user.username
            };
            console.log(sessionUser);
            event.locals.user = sessionUser;
        } catch (error) {
            console.error(error);
        }
    }

    return await resolve(event);
}

export default handle;

 