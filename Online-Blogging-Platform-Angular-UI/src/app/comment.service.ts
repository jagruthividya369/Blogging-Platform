import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentClass } from './CommentClass';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private urlToAddComment = "http://localhost:8080/comment/addComment";
  private urlToGetComments = "http://localhost:8080/comment/getAllComments";
  constructor(private theHttpClient : HttpClient) { }


  getComments(id: number): Observable<Comment[]>{
    return this.theHttpClient.get<Comment[]>(`${this.urlToGetComments}/${id}`);
  }
  addComment(id: number,comment : CommentClass): Observable<any>{
    return this.theHttpClient.post(`${this.urlToAddComment}/${id}`,comment);
  }
}
