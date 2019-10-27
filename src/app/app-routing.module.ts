import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {ContactusComponent} from './contactus/contactus.component';
import { StudentBlogComponent } from './student-blog/student-blog.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'studentBlog', component: StudentBlogComponent },
  { path: 'activateAccount', component: ActivateAccountComponent },
  { path: 'contactUs', component: ContactusComponent },
  { path: 'adminLogin', component: AdminLoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
