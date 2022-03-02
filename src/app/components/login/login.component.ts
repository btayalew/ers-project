import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userLogin: User = {
  ersUserId: 0,
  ersPassword: "",
  ersUsername: "",
  userEmail: "",
  userFirstName: "",
  userLastName: "",
  userRoleId: {}
};

  constructor(private us: UserService, private router: Router) { }

  ngOnInit(): void {
    let role = localStorage.getItem("token")?.split(":")[1];
    if(role === '1'){
      this.router.navigate(['/manager'])
    } else if(role === '2'){
      this.router.navigate(['/employee'])
    } else{
      this.router.navigate(['/'])
    }
  }

  login(): void{
    // const uname = this.username;
    // const pword = this.password;
    // let data: any = {uname, pword};
    // data = JSON.stringify(data);
    this.us.login(this.userLogin).subscribe(res =>{
      if(HttpStatusCode.Ok){
        let role = Number.parseInt(this.us.token.split(":")[1]);
        if(role === 1){
          this.router.navigate(['/manager'])
        } else if(role === 2){
          this.router.navigate(['/employee'])
        } else {
          this.router.navigate(['/'])
        };
      } else{
        console.log("cannot login");
      }
    })
  }

}
