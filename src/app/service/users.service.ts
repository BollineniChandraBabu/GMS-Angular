import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../model/users';
import { getMaxListeners } from 'cluster';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  serverUrl = "http://localhost:9000/login?"
  constructor(private http: HttpClient) { }
  login(formData:any):any{
    return this.http.get(this.serverUrl+"email="+formData.email+"&password="+formData.password);
  }
}
