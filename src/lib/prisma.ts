import { PrismaClient } from '@prisma/client';
import { JWT_ACCESS_SECRET } from '$env/static/private'
import jwt from 'jsonwebtoken';
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient();
	}
	prisma = global.prisma;
}

export default prisma;

export const createUser = async (email: string, username: string, password: string) => {
	const user = await prisma.user.findUnique({
		where: {
			email
		}
	});
	if (user) {
		return {
			error: 'User already exists'
		};
	}
	try {
		const user = await prisma.user.create({
			data: {
				email,
				password,
				username
			}
		});
		return user;
	} catch (err) {
		return {
			error: 'Error creating user'
		};
	}
};

export const loginUser = async (email: string, password: string) => {
	const user = await prisma.user.findUnique({
		where: {
			email
		}
	});
	if (!user) {
		return {
			error: 'User not found'
		};
	}
	const match = password === user.password;
	if (!match) {
		return {
			error: 'Invalid password'
		};
	}
	
	const jwtUser = {
		id: user.id,
		email: user.email
	};

	const token = jwt.sign(jwtUser, JWT_ACCESS_SECRET as string, {
		expiresIn: '1d'
	});

	return { token };
}

export const addWord = async (word: string, collectionId: number) => {
	const newWord = await prisma.word.create({
		data: {
			word,
			collectionId
		}
	});
	return newWord;
}

export const getCollections = async (userId: number) => {
	const collections = await prisma.wordsCollection.findMany({
		where: {
			userId
		},
		include: {
			words: true
		}
	});
	return collections;
}