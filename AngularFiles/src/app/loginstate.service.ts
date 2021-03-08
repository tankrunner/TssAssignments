import { Injectable } from '@angular/core';
import { DirectoryComponent } from './directory/directory.component';

@Injectable({
  providedIn: 'root'
})
export class LoginstateService {

  constructor() { }
  state:boolean;
  list:any;

  public setState(val:boolean):void{
    this.state=val;
  }

  public returnState(){
    return this.state;
  }

  getDetails(val:any):void{
    this.list=val;
    // this.addMember.data.push(this.list);
  }

}
