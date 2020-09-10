import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { User } from '../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-superuserchat',
  templateUrl: './superuserchat.component.html',
  styleUrls: ['./superuserchat.component.css']
})
export class SuperuserchatComponent implements OnInit {
  superusermessagecontent:string='';
  superusermessages:string[] = [];
  ioConnection:any;
  username:string = '';
  errormsg = '';
  newuser:User;

  constructor(private socketService:SocketService) { }
  ngOnInit(){
    this.newuser = JSON.parse(sessionStorage.getItem('currentUser'));
    if(this.newuser != null){
      this.username = this.newuser.username;
    }
    this.initIoConnection();
  }
  private initIoConnection(){
    this.socketService.initSocket();
    this.ioConnection = this.socketService.onMessage()
    .subscribe((superusermessage:string) => {
      this.superusermessages.push(superusermessage);
    });
  }  

  public chat(){
    if(this.superusermessagecontent){
      this.socketService.send(this.superusermessagecontent);
      this.superusermessagecontent=null;
    }else{
      console.log('no message');
    }
  }
}
