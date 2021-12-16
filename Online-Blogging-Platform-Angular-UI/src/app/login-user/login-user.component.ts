import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  user : User = new User();
  constructor(private UserService : UserService,private router: Router) { }
  ngOnInit(): void {
  }
  responseData:any ="  ";
  loginUser():void{
    this.UserService.loginUser(this.user)
    .subscribe((responseData : any )=>{
      if(responseData!=null){
      console.log(responseData);
      this.router.navigate(["user/"+responseData.id]);
      // localStorage.setItem('data',JSON.stringify(responseData));
    }
      else{
        console.log("Bad Credentials");}
        this.responseData=responseData;
    });
  }

}
