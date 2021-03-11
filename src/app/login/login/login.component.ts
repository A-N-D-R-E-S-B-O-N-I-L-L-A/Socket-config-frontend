import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketConfigService } from 'src/app/services/socket-config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string = '';
  input:any;
  room:string = ""

  constructor(private socketService:SocketConfigService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.socketService.login_web_socket(this.input, this.room).then(()=>{

      this.router.navigateByUrl(`/chat/${this.input}`);
      
    })
  }

}
