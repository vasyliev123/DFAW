import prisma from './prisma';

export const createWord = async (word: string) => {
	return await prisma.word.create({
		data: {
			word
		}
	});
};

export const getWords = async () => {
	return await prisma.word.findMany();
};

export const getWord = async (id: number) => {
	return await prisma.word.findUnique({
		where: {
			id
		}
	});
};

export const deleteWord = async (id: number) => {
	return await prisma.word.delete({
		where: {
			id
		}
	});
};
