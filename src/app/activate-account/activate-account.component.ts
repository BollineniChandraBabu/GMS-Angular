import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.msg();
  }
  msg()  
  {  
    $("#myModal").modal();
  }  
}
