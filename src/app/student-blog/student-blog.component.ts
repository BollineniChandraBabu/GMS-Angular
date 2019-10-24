import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-blog',
  templateUrl: './student-blog.component.html',
  styleUrls: ['./student-blog.component.css']
})
export class StudentBlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.generateRandomString();
  }

   generateRandomString()
  {
    document.getElementById("captcha").innerHTML="";
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    document.getElementById("captcha").innerHTML+="<b>"+text+"</b>";	
  }


}
