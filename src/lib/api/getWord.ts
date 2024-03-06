import type { WordDefinitionResponse } from "$lib/types/WordDefinition";
export const getWord = async (word: string): Promise<WordDefinitionResponse> => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data: WordDefinitionResponse = await response.json();
        console.log(data);
        // Check if the response is an error message
        if ('title' in data && 'message' in data && 'resolution' in data) {
            // It's an error message
            return data;
        } else {
            // It's a dictionary entry
            return data as WordDefinitionResponse;
        }
    } catch (error) {
        const errorMessage: WordDefinitionResponse = {
            title: "Error",
            message: "An error occurred while fetching the data.",
            resolution: "Please try again later."
        };
        return errorMessage;
    }
};