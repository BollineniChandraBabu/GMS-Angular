import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users';
import { getMaxListeners } from 'cluster';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  serverUrl = "http://localhost:9000/"
  constructor(private http: HttpClient) { }
  login(email:string,password:string){
    let url = this.serverUrl + "/login?email=chandra@gmail.com&password=chandra";
    var result;
    let user = { "email": email, "password": password};
    return this.http.get(url);
  }
}
