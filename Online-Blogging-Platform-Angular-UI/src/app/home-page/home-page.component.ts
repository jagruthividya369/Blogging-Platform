import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../Blog';
import { BlogService } from '../blog.service';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  blog : Blog = new Blog;
  user :User = new User;
  blogList : Blog[];
  form : any;
  userResponseData :any=null;

isBlogNameSearched:boolean =false;
  constructor(private blogService : BlogService, 
              private router: Router,
              private userService : UserService) { }
  completeDescriptionText !: string;

  ngOnInit(): void {
  }
  searchBlog(){
    this.blogService.getBlogByName(this.blog.blogName)
    .subscribe((responseData : any )=>{
      this.blog=responseData;
      console.log(responseData);
    });
    
    }
    searchUser(){
      this.userService.getUserByDisplayName(this.user.displayName)
      .subscribe((responseData : any )=>{
        this.user=responseData;
        this.userResponseData=responseData;
        this.blogList=[];
        console.log(responseData);
      });
    }

    getAllBlogsMethod(){
      this.blogService.getAllBlogs().subscribe(ResponseData=>{
        this.blogList=ResponseData;
        console.log(ResponseData);
      });
    }
    displayCompleteText(){
      this.blog.blogContent = this.completeDescriptionText;
    }

}
