import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlToAddUser :string = "http://localhost:8080/user/create";
  urlToLogin : string = "http://localhost:8080/user/login";
  urlToSearchByDisplayName : string = "http://localhost:8080/user/getUserByUserHandle";
  urltoUpdateByDisplayName: string = "http://localhost:8080/user/updateAllUserData";
  urlToGetUserById: string = "http://localhost:8080/user/userByUserId";
  
  
  constructor(private theHttpClient : HttpClient) { }
  public createNewUser(user: User){
    return this.theHttpClient.post<User>(this.urlToAddUser,user);
  }
  public loginUser(user: User):Observable<any>{
    return this.theHttpClient.post<any>(this.urlToLogin,user);
  }
  public getUserByDisplayName(displayName: string): Observable<User>{
    return this.theHttpClient.get<User>(`${this.urlToSearchByDisplayName}/${displayName}`);
  }

  public getUserProfile(id :number):Observable<User>{
    return this.theHttpClient.get<User>(`${this.urlToSearchByDisplayName}/${id}`);
  }

  public updateUser(name: string):Observable<any>{
    return this.theHttpClient.get<User>(`${this.urltoUpdateByDisplayName}/${name}`);
  }
  public getUserById(id : number):Observable<any>{
    return this.theHttpClient.get<User>(`${this.urlToGetUserById}/${id}`);
  }


}
