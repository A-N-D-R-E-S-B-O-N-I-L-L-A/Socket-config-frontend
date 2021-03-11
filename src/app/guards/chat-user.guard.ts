import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SocketConfigService } from '../services/socket-config.service';

@Injectable({
  providedIn: 'root'
})
export class ChatUserGuard implements CanActivate {

  constructor(private socketService:SocketConfigService){

  }
  canActivate() {

    console.log(this.socketService.returnUser());
    if (this.socketService.returnUser()) {
      return true;
    }else{
      console.log("retoenalo a la pagina pirobo");
      return false
    }
   
  }
  
}
