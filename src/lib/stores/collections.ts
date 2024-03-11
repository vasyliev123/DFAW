import { writable } from "svelte/store";
import type { Collections } from '$lib/types/Collections';
export const collections = writable<Collections[]>([]);