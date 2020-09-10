import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { GroupadminchatComponent } from './groupadminchat/groupadminchat.component';
import { SuperuserchatComponent } from './superuserchat/superuserchat.component';

const routes: Routes = [{path:'login',component:LoginComponent},{path:'chat',component:ChatComponent}, {path:'groupadminchat',component:GroupadminchatComponent}, {path:'superuserchat',component:SuperuserchatComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
