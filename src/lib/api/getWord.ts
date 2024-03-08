import type { WordDefinitionResponse } from "$lib/types/WordDefinition";
export const getWord = async (word: string): Promise<WordDefinitionResponse> => {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();

       return data;
};