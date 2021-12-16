import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../Blog';
import { CommentClass } from '../CommentClass';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  comment :CommentClass=new CommentClass();
  userId: number;
  blogId:number;
  constructor(private commentService : CommentService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId= params['id'];
    this.blogId =params['blogId'] });
    console.log(this.userId,this.blogId);
  }
  createNewComment():void{
    console.log(this.comment);
    this.commentService.addComment(this.blogId,this.comment)
                       .subscribe((responseData: any) =>{
                        alert("Comment Posted Successfully");
                        this.router.navigate(["user/"+this.userId]);

                      });

    }
  }


