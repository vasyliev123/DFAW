import prisma from './prisma';

export const createCollection = async (title: string) => {
	return await prisma.collection.create({
		data: {
			title
		}
	});
};

export const getCollections = async () => {
	return await prisma.collection.findMany();
};

export const getCollection = async (id: number) => {
	return await prisma.word.findUnique({
		where: {
			id
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
