import type{ RequestHandler } from "./$types";
import { getCollection, getCollections, deleteCollection, createCollection} from "$lib/db/crud.collections";
export const GET: RequestHandler = async () => {
    return new Response(await getCollections());
};
export const POST: RequestHandler = async () => {
    
    return new Response();
};
export const PUT: RequestHandler = async () => {
    
    return new Response();
};
export const DELETE: RequestHandler = async () => {
    
    return new Response();
};