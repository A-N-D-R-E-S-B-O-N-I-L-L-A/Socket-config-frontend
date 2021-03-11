import { Component, OnInit } from '@angular/core';
import { SocketConfigService } from 'src/app/services/socket-config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  serviceSocket:any;
  constructor(private sserviceSocket:SocketConfigService) { 
    this.serviceSocket = sserviceSocket
  }

  ngOnInit(): void {
  }

}
