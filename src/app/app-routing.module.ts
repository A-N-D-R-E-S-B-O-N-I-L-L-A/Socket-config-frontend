import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { ChatUserGuard } from './guards/chat-user.guard';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'chat/:id', component: ChatComponent , canActivate: [ChatUserGuard]},
  {path:'**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
