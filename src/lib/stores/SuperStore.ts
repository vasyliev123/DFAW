import { writable } from "svelte/store";

export const isPracticeMode = writable(false);

export const recentWords = writable<string[]>([]);

export const selectedCollections = writable<string[]>([]);