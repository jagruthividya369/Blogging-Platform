import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlToAddUser :string ="http://localhost:8080/user/create";
  urlToLogin : string ="http://localhost:8080/user/login";

  constructor(private theHttpClient : HttpClient) { }
  public createNewUser(user: User){
    return this.theHttpClient.post<User>(this.urlToAddUser,user);
  }
  public loginUser(user: User){
    return this.theHttpClient.get<User>(this.urlToLogin);
  }
}
