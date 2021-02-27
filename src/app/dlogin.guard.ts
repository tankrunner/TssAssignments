import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginstateService } from './loginstate.service';

@Injectable({
  providedIn: 'root'
})
export class DloginGuard implements CanActivate {
  f:boolean;
  constructor(private stateService:LoginstateService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    if(this.stateService.returnState()){
      return true;
    }
    else{
      return false;
    }
  }
  
}
