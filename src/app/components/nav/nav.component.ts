import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private us: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.us.logout();
    this.router.navigate(['']);
  }

}
