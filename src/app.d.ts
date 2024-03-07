// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { PrismaClient } from "@prisma/client";
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface Locals {
			user?: {
				id: number;
				email: string;
				username: string;
			};
		}
	}	
	// eslint-disable-next-line no-var
	var prisma: PrismaClient;
}

export {};
