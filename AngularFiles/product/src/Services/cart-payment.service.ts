import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartPaymentService {

  constructor() { }

  header:string;
  msg:string;
  buttonText:string;
  navigateTo:string;

  setStatusMessage(header:string,msg:string,buttonText:string,navigateTo:string){
    this.header=header;
    this.msg=msg;
    this.buttonText=buttonText;
    this.navigateTo=navigateTo;
  }
}
