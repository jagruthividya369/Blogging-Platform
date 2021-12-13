import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  user : User = new User();
  constructor(private UserService : UserService) { }

  ngOnInit(): void {
  }
  loginUser():void{
    this.UserService.loginUser(this.user)
    .subscribe(responseData =>{
      alert("User Login Successful");
    });
  }

}
