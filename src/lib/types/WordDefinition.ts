interface Phonetic {
    text: string;
    audio?: string;
}

interface Definition {
    definition: string;
    example: string;
    synonyms: string[];
    antonyms: string[];
}

interface Meaning {
    partOfSpeech: string;
    definitions: Definition[];
}

interface Word {
    word: string;
    phonetic: string;
    phonetics: Phonetic[];
    origin: string;
    meanings: Meaning[];
}

interface NoDefinitionsError {
    title: string;
    message: string;
    resolution: string;
}

type WordDefinition = Word[];

type WordDefinitionResponse = WordDefinition | NoDefinitionsError;

export type {WordDefinitionResponse, WordDefinition};
 