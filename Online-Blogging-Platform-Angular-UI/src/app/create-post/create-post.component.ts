import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../Blog';
import { BlogService } from '../blog.service';
import {RouterModule, ExtraOptions} from "@angular/router";


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent implements OnInit {
  blog : Blog=new Blog();
  id !:any;
  constructor(private BlogService : BlogService,
              private route : ActivatedRoute,
              private router : Router) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id= params['id'];  });
    console.log(this.id);

  }
  createNewBlog():void{
 
    if(this.blog.publishedStatus)
    {  this.BlogService.createNewBlog(this.blog, this.id)
      .subscribe((responseData: any) =>{
        alert("Blog Posted Successfully");
      });}
    else{
      this.BlogService.createNewDraft(this.blog, this.id)
      .subscribe((responseData: any) =>{
        alert("Draft Saved Successfully");
      });
    }
    this.router.navigate(["user/"+this.id]);

  }

}
