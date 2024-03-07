import type { ServerLoad } from '@sveltejs/kit';
 export const load: ServerLoad = async ({ locals }) => {
	if(locals.user){
        return {
            user: locals.user
        }
    }
    console.log('no user found');
	console.log(locals.user);
    return {
        user: undefined
    }
};
