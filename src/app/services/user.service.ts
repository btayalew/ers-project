import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: any;
  users: any;
  token: string = "";
  id?: Number;
  constructor(private http: HttpClient) { }

  getUserInfo(){
    let id = localStorage.getItem("token")?.split(":")[0];
    let userInfoUrl = 'http://localhost:8080/ersUser/';
    return this.http.get(userInfoUrl+id).pipe(map((response: any) => {
      this.users = response;
    }));
  }

  update(data: string){
  let id = localStorage.getItem("token")?.split(":")[0];
  return this.http.put(`http://localhost:8080/user/${id}`, data, {
    headers: {'Content-type': 'application/json'},
    observe: 'response'
  }).pipe(
    map(response => {
      let res = JSON.stringify(response.body);
      this.currentUser = res;
      localStorage.setItem("currentUser", this.currentUser);
    })
  );
}

login(data: any){
  return this.http.post(`http://localhost:8080/api/auth`, data, {
    headers: {'Content-type': 'application/json'},
    observe: 'response'
  }).pipe(
    map(response => {
      this.currentUser = response.body;
      console.log(this.currentUser);
      this.token = response.headers.get('Authorization') || '';
      localStorage.setItem("token", this.token);
      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    })
  );
}

logout(): void {
  this.currentUser = undefined;
  this.token = '';
  localStorage.clear();
}
}
