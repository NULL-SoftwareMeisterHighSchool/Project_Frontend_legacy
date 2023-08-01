export type getBlogDetailProps = {
    setdata: React.Dispatch<React.SetStateAction<{ 
        title: string;
        views: number;
        body: string;
        createdAt: string;
        author : {
            name : string
        };
        isLiked: boolean;
        isAuthor:boolean;
        likes: number;
        comments: number;
    }>>;
    id: string | undefined;
};
