import prisma from './prisma';

export const createCollection = async (title: string) => {
	return await prisma.collection.create({
		data: {
			title
		},
		include: {
			words: true
		}
	});
};

export const getCollections = async () => {
	return await prisma.collection.findMany({
		include: {
			words: true
		}
	});
};

export const getCollection = async (id: number) => {
	return await prisma.collection.findUnique({
		where: {
			id
		},
		include: {
			words: true
		}
	});
};
export const deleteCollection = async (id: number) => {
	return await prisma.collection.delete({
		where: {
			id
		}
	});
};

export const updateCollection = async (id: number, title: string) => {
    return await prisma.collection.update({
        where: {
            id
        },
        data: {
            title
        }
    });
};