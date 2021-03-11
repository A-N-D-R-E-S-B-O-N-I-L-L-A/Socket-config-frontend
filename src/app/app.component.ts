import { AfterViewInit, Component } from '@angular/core';
import { io } from "socket.io-client";
import { SocketConfigService } from './services/socket-config.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'SocketClientProve';

  constructor(public sockectService:SocketConfigService) {
    
  }
  ngAfterViewInit(): void {

  }
} 
