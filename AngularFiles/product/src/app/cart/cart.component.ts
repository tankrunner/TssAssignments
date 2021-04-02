import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCartService } from 'src/Services/product-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  p1:number;
  p2:number;
  p3:number;
  p4:number;
  availability:number[];

  constructor(private productCart:ProductCartService, private http:HttpClient, private router:Router) {
   }

  ngOnInit(): void {
    this.p1=this.productCart.Added[0];
    this.p2=this.productCart.Added[1];
    this.p3=this.productCart.Added[2];
    this.p4=this.productCart.Added[3];
    this.availability=this.productCart.availableQuantity;
  }

  buyNow(){
    if(this.p1<=this.availability[0] && this.p2<=this.availability[1] && this.p3<=this.availability[2] && this.p4<=this.availability[3]){
      this.http.get("https://localhost:44356/payment",{observe:'response'}).subscribe(data=>{
        console.log(data.body);
        if(data.body){
          this.router.navigate(['payment']);
        }
        else{
          console.log('response false');
        }
      });
    }

    else{
      console.log('quantity');
    }
  }

  
}
