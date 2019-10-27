import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor() {
    setInterval(() => {
      this.doDate();
    }, 1000);
   }

  ngOnInit() {
    this.doDate();
  }
  doDate()
  {
      var str = "";
      var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
      var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
      var now = new Date();
      str += "Today is: " + days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear() + " " + now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
      document.getElementById("todaysDate").innerHTML = str;
  }
 
}
