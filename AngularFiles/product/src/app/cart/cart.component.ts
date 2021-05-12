import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartPaymentService } from 'src/Services/cart-payment.service';
import { ProductCartService } from 'src/Services/product-cart.service';
import {ProductInterface} from 'src/Services/product-cart.service';

interface addedProduct
{
  productId:number;
  productName:string;
  productaddedQuantity:number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  subscription: Subscription;
  subQuantity: Subscription;
  subPay:Subscription;

  addedArr:addedProduct[]=[];
  arr:ProductInterface[]=[];

  constructor(private productCart: ProductCartService, private http: HttpClient, private router: Router, private cartPayment: CartPaymentService) {
    this.subscription=new Subscription();
  }

  ngOnInit(): void {
    this.arr=this.productCart.arr;

    this.arr.forEach(x=>{this.addedArr.push({productId:x.productId,productaddedQuantity:1,productName:x.productName})});
    console.log(this.addedArr);
  }

  buyNow():void {

    this.subQuantity=this.http.post("https://localhost:44356/product/cart", { "addedToCart": this.addedArr }, { observe: "response" }).subscribe(data => {
      console.log(data.body);
      // console.log(data.body[0]);
      this.subscription.add(this.subQuantity);

      if(data.body[0]=="Success")
      {
        this.cartPayment.setStatusMessage(data.body[1],data.body[2],data.body[3],"product");
        this.productCart.arr=[];
        this.router.navigate(['payment']);
      }
      else if(data.body[0]=="Failure")
      {
        this.cartPayment.setStatusMessage(data.body[1],data.body[2],data.body[3],"cart"); 
        this.router.navigate(['payment']);
      }
      else if(data.body[0]=="Insufficient")
      {
        this.cartPayment.setStatusMessage(data.body[1],data.body[2],data.body[3],"cart"); 
        this.router.navigate(['payment']);
      }

    },

    err=>{
      console.error(err);
    }
    
    );
  }

  ngOnDestroy(): void {
    console.log(this.addedArr);
    this.subscription.unsubscribe();
  }

}


// {observe:"response"}
// if(this.p1<=this.availability[0] && this.p2<=this.availability[1] && this.p3<=this.availability[2] && this.p4<=this.availability[3]){
    //   this.subscription=this.http.get("https://localhost:44356/payment",{observe:'response'}).subscribe(data=>{
    //     console.log(data.body);
    //     if(data.body){
    //       this.cartPayment.setStatusMessage("Thank You!","Payment Successful.","Continue Shopping","product");
    //       this.productCart.availableQuantity[0]-=this.p1;
    //       this.productCart.availableQuantity[1]-=this.p2;
    //       this.productCart.availableQuantity[2]-=this.p3;
    //       this.productCart.availableQuantity[3]-=this.p4;

    //       this.router.navigate(['payment']);

    //       this.productCart.Added.fill(0);
    //       this.productCart.calculate();
    //     }
    //     else{
    //       this.cartPayment.setStatusMessage("Order Incomplete","Order could not be completed as your Payment Failed. Please Try Again.","View Cart","cart"); 
    //       this.router.navigate(['payment']);
    //     }
    //   });
    // }

    // else{
    //       this.cartPayment.setStatusMessage("Order Incomplete","Order could not be completed as we have Insufficient Quantity of Items required. Sorry!","View Cart","cart");          
    //       this.router.navigate(['payment']);
    // }
    
      // if (data.body)//sufficient quantity
      // {
      //   this.subPay=this.http.get("https://localhost:44356/payment", { observe: 'response' }).subscribe(data => {
      //     this.subscription.add(this.subPay);
      //     if(data.body)//payment success
      //     {
      //       this.cartPayment.setStatusMessage("Thank You!","Payment Successful.","Continue Shopping","product");
      //       this.productCart.Added.fill(0);
      //       this.productCart.calculate();
      //       this.productCart.initializeVisibility();
      //       this.router.navigate(['payment']);
      //     }
      //     else//payment failed
      //     {
      //       this.cartPayment.setStatusMessage("Order Incomplete","Order could not be completed as your Payment Failed. Please Try Again.","View Cart","cart"); 
      //       this.router.navigate(['payment']);
      //     }
      //   })
      // }
      // else//not avl
      // {
      //   this.cartPayment.setStatusMessage("Order Incomplete","Order could not be completed as we have Insufficient Quantity of Items required. Sorry!","View Cart","cart");          
      //   this.router.navigate(['payment']);
      // }