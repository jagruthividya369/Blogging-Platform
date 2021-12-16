import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../Blog';
import { BlogService } from '../blog.service';
import { CommentService } from '../comment.service';
import {CommentClass} from '../CommentClass';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-show-comments',
  templateUrl: './show-comments.component.html',
  styleUrls: ['./show-comments.component.css']
})
export class ShowCommentsComponent implements OnInit {

  constructor(private commentService : CommentService,
    private route : ActivatedRoute,
    private router : Router,
    private userService : UserService,
    private blogService : BlogService) { 

    }
    userId: number;
    blogId:number;
    commentList : CommentClass[];
    user : User= new User();
    blog : Blog = new Blog();
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.userId = params['id'];
    this.blogId =params['blogId'] });
    console.log(this.userId,this.blogId);

    this.userService.getUserById(this.userId).
    subscribe((responseData: any)=>{
      this.user=responseData;
    })

    this.blogService.getBlogById(this.blogId).
    subscribe((responseData: any)=>{
      this.blog=responseData;
    })

    this.commentService.getComments(this.blogId).
    subscribe((responseData : any)=>{
      this.commentList=responseData;
    });
  }

}
