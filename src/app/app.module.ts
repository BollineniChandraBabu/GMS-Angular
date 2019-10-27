import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { StudentBlogComponent } from './student-blog/student-blog.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
declare var jquery:any;
declare var $ :any;
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    HomeComponent,
    ContactusComponent,
    StudentBlogComponent,
    ActivateAccountComponent,
    AdminLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   NgbModule,
   ModalModule.forRoot(), 
   PopoverModule.forRoot(),
   HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[LoginComponent]
})
export class AppModule { }
