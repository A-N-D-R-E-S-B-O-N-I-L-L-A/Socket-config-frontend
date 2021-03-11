import { Injectable } from '@angular/core';
import { from, Observable, Subscriber } from 'rxjs';
import { Socket } from 'socket.io-client';
import { io } from "socket.io-client";

import  {UserClass}  from '../classes/user'

@Injectable({
  providedIn: 'root'
})
export class SocketConfigService {

  socket:Socket = io("http://localhost:3000");
  socketStatus:boolean = false;
  usuario:any = null;

  constructor() { 
    this.cargarLocalStorage();
    this.checkStatus()
  }

  checkStatus(){

    this.socket.on("connect", (info:any) =>{

      console.log("conected to the server");
      this.socketStatus = true

    })


    this.socket.on("disconnect", (info:any) =>{

      console.log("disconnected to the server");
      this.socketStatus = false
 
    })
  }

  emit(event:any, data:any){
    this.socket.emit(event, data, () =>{

      console.log(data, ":emited with exit");
 
    })
  }


  listen(event:any){

   return new Observable((subscriber)=>{
    this.socket.on(event, (info:any)=>{
      subscriber.next(info)
  
    })

   })
    
  }

  login_web_socket(name:string, room:string){

    return new Promise((resolve, reject)=>{


      this.socket.emit('config-user', {name, room}, (resp:any)=>{
        this.usuario = new UserClass( name, room );

        this.guardarInfoLocalStorage();
       resolve()
      })


    })
  
  }


  guardarInfoLocalStorage(){
    localStorage.setItem('user', JSON.stringify(this.usuario))
  }

  cargarLocalStorage(){

    if ( localStorage.getItem('user') ){

      let userConvertidoJson:any = localStorage.getItem('user') 

      this.usuario = JSON.parse(userConvertidoJson)

      this.login_web_socket( this.usuario.nombre, this.usuario.room).then(()=>{
        console.log("nuevamente logeado");
      })
    }
 
  }

  returnUser(){
    return this.usuario
  }
}
