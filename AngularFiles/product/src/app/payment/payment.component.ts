import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartPaymentService } from 'src/Services/cart-payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  header:string;
  msg:string;
  buttonText:string;
  navigateTo:string;

  constructor(private cartPayment:CartPaymentService,private router:Router) { }

  ngOnInit(): void {
    this.header=this.cartPayment.header;
    this.msg=this.cartPayment.msg;
    this.buttonText=this.cartPayment.buttonText;
    this.navigateTo=this.cartPayment.navigateTo;
  }

  //btn
  NavigateTo():void{
    this.router.navigate([this.navigateTo]);
  }

}
