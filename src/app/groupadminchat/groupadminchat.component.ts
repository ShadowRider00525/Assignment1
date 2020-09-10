import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket.service';
import { User } from '../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-groupadminchat',
  templateUrl: './groupadminchat.component.html',
  styleUrls: ['./groupadminchat.component.css']
})
export class GroupadminchatComponent implements OnInit {

  groupadminmessagecontent:string='';
  groupadminmessages:string[] = [];
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
    .subscribe((groupadminmessage:string) => {
      this.groupadminmessages.push(groupadminmessage);
    });
  }  

  public chat(){
    if(this.groupadminmessagecontent){
      this.socketService.send(this.groupadminmessagecontent);
      this.groupadminmessagecontent=null;
    }else{
      console.log('no message');
    }
  }

}
