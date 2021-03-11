import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { SocketConfigService } from 'src/app/services/socket-config.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {


  message = ''
  messages:any[] = [];
  listenService:any;
  element:any;




  constructor(private eventService:SocketConfigService) { }

  ngOnInit(): void {

    this.element = document.getElementById('chat-messages')

    this.listenService =  this.eventService.listen('respGoku').subscribe(resp => {
      console.log(resp);
      this.messages.push(resp)


      setTimeout(() => {
        
        this.element.scrollTop = this.element.scrollHeight

      }, 60);


    })
  }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.listenService.unsubscribe()
  }

  emitMessage(){

    if(this.message.length === 0){
      return;
    }

    console.log(this.eventService.returnUser().nombre, "ll");
    const data = {
      name: this.eventService.usuario.nombre,
      body: this.message
    }

    this.eventService.emit('goku', data);


  }

}
