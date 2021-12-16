import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ShowCommentsComponent } from './show-comments/show-comments.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'homePage',
    component:HomePageComponent,

  },
  {
    path:'WelcomePage',
    component:WelcomeComponent,
    children:[
      {path:'homePage',component:HomePageComponent}
    ]
  },
  {path:'',redirectTo: '/WelcomePage', pathMatch: 'full'},
  {path:'RegisterUser', component:RegisterUserComponent},
  {path:'LoginUser',component:LoginUserComponent},
  {path:'user/:id/ViewUser',component:ViewUserComponent},
  {path:'createPost/:id',component:CreatePostComponent},
  {path:'BlogById/:id',component:HomePageComponent},
  {path:'DisplayName/:name', component:HomePageComponent},
  {path:'user/:id',component:UserHomePageComponent},
  {path:'user/:id/AddBlog',component:CreatePostComponent},
  {path:'user/:id/AddComment/:blogId',component:PostCommentComponent},
  {path:'user/:id/ShowComments/:blogId',component:ShowCommentsComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
