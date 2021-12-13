import { User } from "./User";

export class Blog{
    blogName !: string;
    blogContent !: string;
    blogLikes !: number;
    blogDisLikes !: number;
    user !: User;
}