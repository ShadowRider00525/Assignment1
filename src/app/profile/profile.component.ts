import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username:string = '';
  email:string = '';
  pass:string = '';
  position:string = '';
  newuser:User;
  errormsg = '';

  constructor(private router:Router, private route:ActivatedRoute) {}

  ngOnInit(){
    this.newuser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(this.newuser != null){
      this.username = this.newuser.username;
      this.email = this.newuser.email;
      this.position = this.newuser.position;
    }
  }
}
