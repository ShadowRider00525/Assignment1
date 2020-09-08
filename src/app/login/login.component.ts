import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username:string = '';
  pass:string = '';
  email:string = '';
  role:string = '';
  errormsg = '';
  newuser:User;
  constructor(private router:Router, private route:ActivatedRoute, private http:HttpClient) {}


  ngOnInit() {
    this.username = this.route.snapshot.params.username;
  }
  
  itemClicked(){
    this.http.post<User>('http://localhost:3000/api/auth', {username: this.username, pass: this.pass}).subscribe(
    data =>{
      if(data.valid == true){
        this.newuser = new User(data.username,data.email, data.role)
        sessionStorage.setItem('currentUser',JSON.stringify(this.newuser));
        this.router.navigate(['/account']);
      }
    else{
      this.errormsg = "Incorrect Credentials"
    }
    error =>{
      this.errormsg = "Incorrect Credentials"
    }
    console.log(data);
  })
}
logOut(){
  sessionStorage.clear();
  this.router.navigate(['/chat']);

}
}
