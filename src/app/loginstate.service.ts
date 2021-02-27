import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginstateService {

  constructor() { }
  state:boolean;

  public setState(val:boolean){
    this.state=val;
  }

  public returnState(){
    return this.state;
  }
}
