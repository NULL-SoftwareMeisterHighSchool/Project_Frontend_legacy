export type getBlogDetailProps = {
    setdata: React.Dispatch<React.SetStateAction<{ 
        title: string;
        views: number;
        body: string;
        createdAt: string;
        author : {
            id: number;
            name : string;
        };
        isLiked: boolean;
        isAuthor:boolean;
        likes: number;
        commentCount: number;
        comments : CommentType[],
    }>>;
    id: string | undefined;
};

type CommentType = {
    commentID: number;
    author: {
        id: number;
        name: string;
    }
    content: string;
    createdAt: string;
}

export type postCommentType = {
    id: string | undefined;
    body: string;
}
