import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: User;
  userId: number;
  profile:FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService,private route : ActivatedRoute,
    private router : Router) {


  }

  ngOnInit(): void {
    this.route.params.subscribe((params : any) => {
      this.userId= params['id'];
     });
     this.userService.getUserById(this.userId).
    subscribe((responseData: any)=>{
      this.user=responseData;
    });
  }


}
