import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user : User = new User();
  constructor(private UserService : UserService, private router: Router) { }

  ngOnInit(): void {
  }
  createNewUser():void{
    this.UserService.createNewUser(this.user)
    .subscribe(responseData =>{
      alert("User Registration Successful"); 
      this.router.navigate(["LoginUser"]);
    });
  }

}
