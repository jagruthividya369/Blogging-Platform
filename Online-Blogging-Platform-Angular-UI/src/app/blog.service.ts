import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from './Blog';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private urlToAddBlog: string="http://localhost:8080/blog/createBlog";
  private urlToAddDraft: string="http://localhost:8080/blog/createDraft";
  private urlToGetBlogById = "http://localhost:8080/blog/getBlogByBlogId";
  private urlToGetBlogByName = "http://localhost:8080/blog/getBlogByBlogName";
  private urlToGetAllBlogs="http://localhost:8080/blog/getAllBlogsSortedByTime";
  private urlToGetAllPostsOfUserId = "http://localhost:8080/blog/getPostByUserId";
  private urlToGetAllBlogsOfUserId = "http://localhost:8080/blog/getBlogByUserId";
  private urlToGetAllDraftsOfUserId = "http://localhost:8080/blog/getDraftByUserId";
  private urlTodeleteBlog="http://localhost:8080/blog/deleteBlog";
  
  
  constructor(private theHttpClient : HttpClient) { }
  public createNewBlog(blog: Blog, id:number){
    return this.theHttpClient.post<Blog>(`${this.urlToAddBlog}/${id}`,blog);
  }
  public createNewDraft(blog: Blog, id:number){
    return this.theHttpClient.post<Blog>(`${this.urlToAddDraft}/${id}`,blog);
  }
  getBlogById(id: number): Observable<Blog>{
    return this.theHttpClient.get<Blog>(`${this.urlToGetBlogById}/${id}`);
  }
  getBlogByName(name: string): Observable<Blog>{
    return this.theHttpClient.get<Blog>(`${this.urlToGetBlogByName}/${name}`);
  }
  getAllBlogs(): Observable<Blog[]>{
    return this.theHttpClient.get<Blog[]>(this.urlToGetAllBlogs);
  }
  getAllPostsByUserId(id: number): Observable<Blog[]>{
    return this.theHttpClient.get<Blog[]>(`${this.urlToGetAllPostsOfUserId}/${id}`)
  }
  getAllBlogsByUserId(id: number): Observable<Blog[]>{
    return this.theHttpClient.get<Blog[]>(`${this.urlToGetAllBlogsOfUserId}/${id}`)
  }
  getAllDraftsByUserId(id: number): Observable<Blog[]>{
    return this.theHttpClient.get<Blog[]>(`${this.urlToGetAllDraftsOfUserId}/${id}`)
  }
  deleteBlogByBlogId(id:number): Observable<Blog>{
    return this.theHttpClient.delete<Blog>(`${this.urlTodeleteBlog}/${id}`)
  }
}
