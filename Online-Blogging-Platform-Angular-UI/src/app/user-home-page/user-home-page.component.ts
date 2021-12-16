import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../Blog';
import { BlogService } from '../blog.service';
import { CommentService } from '../comment.service';
import { User } from '../User';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {
  blog : Blog = new Blog;
  user :User=new User;
  id !: number; 
  blogList !: Blog[];
  commentList !: Comment[];
  userResponseData :any=null;
  currentUser : User =new User;


  constructor(private blogService : BlogService, 
    private router: Router,
    private route: ActivatedRoute,
    private userService : UserService,
    private commentService : CommentService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    // console.log(this.id);
    this.userService.getUserById(this.id).
                      subscribe((responseData : any) =>{
                      this.currentUser=responseData;
                      console.log(this.currentUser);
                      });
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
    getAllPostsByUserIdMethod(){
      this.blogService.getAllPostsByUserId(this.id).
      subscribe((responseData : any)=>{
        this.blogList=responseData;
        console.log(responseData);
      });
    }
    getAllBlogsByUserIdMethod(){
      this.blogService.getAllBlogsByUserId(this.id).
      subscribe((responseData : any)=>{
        this.blogList=responseData;
        console.log(responseData);
      });
    }
    getAllDraftsByUserIdMethod(){
      this.blogService.getAllDraftsByUserId(this.id).
      subscribe((responseData : any)=>{
        this.blogList=responseData;
        console.log(responseData);
      });
    }
    deleteBlogByBlogIdMethod(id: number){
      this.blogService.deleteBlogByBlogId(id).
      subscribe((responseData : any)=>{
        alert("Deleted");
      });
    }

    getComments(id:number){
      this.commentService.getComments(id).
      subscribe((responseData : any)=>{
        this.commentList=responseData;
      });
    }

}
