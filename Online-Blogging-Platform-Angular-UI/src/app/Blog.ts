import { User } from "./User";

export class Blog{
    blogId : number;
    blogName : string;
    blogContent: string;
    blogLikes : number;
    blogDisLikes : number;
    user : User;
    publishedStatus: boolean;
    created_date: Date;


}