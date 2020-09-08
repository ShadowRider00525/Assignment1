import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username:string = '';
  email:string = '';
  role:string = '';
  newuser:User;
  constructor(private router:Router, private route:ActivatedRoute) {}

  ngOnInit() {
    this.newuser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(this.newuser != null){
      this.email = this.newuser.email;
      this.role = this.newuser.role;
    }
  }
  
}