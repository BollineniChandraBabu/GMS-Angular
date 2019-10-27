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
  private usersService:UsersService;
  private router:Router
  email:string;
  password:string;

  constructor(private modalService: NgbModal) {}
  ngOnInit() {
  this.msg();
  }
  msg()  
  {  
    $("#myModal").modal();
  }  
  login()
  {
    event.preventDefault;
    console.log("Login:", this.email, this.password);
   // this.usersService.login(this.email, this.password).subscribe ( (res)=>{
     // console.log(res);
   // });
   this.router.navigate(['home']);
  }
}