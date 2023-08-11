export type BLOGTYPE = {
    id: number;
    title: string;
    thumbnail: string;
    summary: string;
    author: {
        id: number;
        name: string;
    };
    createdAt: string;
    likes: number;
    views: number;
};
