import { Blog } from "./Blog";

export class CommentClass{
    commentId !: number;
    commentDescription !: string;
    timestamp !: Date;
    Blog !: Blog;
}