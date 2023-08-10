export type getBlogDetailProps = {
    setdata: React.Dispatch<
        React.SetStateAction<{
            title: string;
            views: number;
            body: string;
            createdAt: string;
            author: {
                id: number;
                name: string;
            };
            isLiked: boolean;
            isAuthor: boolean;
            likes: number;
            commentCount: number;
            comments: CommentType[];
        }>
    >;
    id: string | undefined;
};

type CommentType = {
    commentID: number;
    author: {
        id: number;
        name: string;
    };
    content: string;
    createdAt: string;
};

type skillDataProps = {
    articles: blogType[];
    totalCount: number;
};
type blogType = {
    id: number;
    type: string;
    title: string;
    thumbnail: string;
    summary: string;
    author: {
        id: number;
        name: string;
    };
    createdAt: string;
};
export type getBlogProps = {
    type: string;
    authorID?: string;
    duration_start?: string;
    duration_end?: string;
    query?: string;
    offset: number;
    limit: number;
    order: string;
    setData: React.Dispatch<React.SetStateAction<skillDataProps>>;
    data?: skillDataProps;
};

export type postCommentType = {
    id: string | undefined;
    body: string;
}

export type postWriteType = {
    title : string;
    articleType : string;
    blogContent : string;
}

export type patchWriteType = {
    id : string | undefined;
    title : string;
    articleType : string;
    blogContent : string;
}