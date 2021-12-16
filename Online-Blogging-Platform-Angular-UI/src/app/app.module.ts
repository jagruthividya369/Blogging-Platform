import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { TruncatePipe } from './truncate.pipe';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { ShowCommentsComponent } from './show-comments/show-comments.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginUserComponent,
    RegisterUserComponent,
    WelcomeComponent,
    NotFoundComponent,
    ViewUserComponent,
    CreatePostComponent,
    TruncatePipe,
    UserHomePageComponent,
    HeaderComponent,
    FooterComponent,
    PostCommentComponent,
    ShowCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
