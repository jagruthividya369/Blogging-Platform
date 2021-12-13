import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'homePage',
    component:HomePageComponent,
    children:[

    ]
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
  {path:'ViewUser',component:ViewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
