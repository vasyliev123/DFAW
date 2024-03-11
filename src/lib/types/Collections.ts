export type Collections = {
    id: number;
    title: string;
    createdAt: string;
    words: {
      id: number;
      word: string;
      createdAt: string;
    }[];
};