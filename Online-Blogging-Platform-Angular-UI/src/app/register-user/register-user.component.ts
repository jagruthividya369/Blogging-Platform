import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user : User = new User();
  constructor(private UserService : UserService) { }

  ngOnInit(): void {
  }
  createNewUser():void{
    this.UserService.createNewUser(this.user)
    .subscribe(responseData =>{
      alert("User Registration Successful");
    });
  }

}
