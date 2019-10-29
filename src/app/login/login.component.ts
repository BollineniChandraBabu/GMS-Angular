import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';
declare var jquery:any;
declare var $ :any;
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  modalRef: BsModalRef;
  email:string;
  password:string;
  constructor(
    private modalService: NgbModal,
    private router:Router,
    private usersService:UsersService
    ) {}
  ngOnInit() {
  this.msg();
  }
  msg()  
  {  
    $("#myModal").modal();
  }  
  login()
  {
    let formData:any={
      'email':this.email,
      'password':this.password
     };
     this.usersService.login(formData).subscribe((res)=>{
      console.log(JSON.stringify(res));
     
      var data=res;
      if(data!=null){
        localStorage.setItem("user",JSON.stringify(res));
     // this.router.navigate(['adminfeature']);
    }
      else
      {
       alert("Access Denied!Invalid credentials");
        document.getElementById("messageBody").innerHTML="Access Denied! Invalid credentials";
      }
     },(err)=>
     {
     console.log('error=>'+JSON.stringify(err.error.message));
     });
  }
}