import { Component, OnInit } from '@angular/core';
import { ProductCartService } from 'src/Services/product-cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  total:number;
  product:any;
  subscription:Subscription;

  constructor(private productCart:ProductCartService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.total=this.productCart.totalItemsInCart;
    
    console.log(this.productCart.Added);
        
    this.subscription=this.http.get("https://localhost:44356/productcart").subscribe(data=>{
      console.log(data[0]["product_name"]);
      this.product=data;
    });

  }

  add(pid:number):void{
    console.log(pid);
    this.productCart.visibility[pid]="visible";
    this.productCart.Added[pid]=1;
    this.total=this.productCart.calculate();
    console.log(this.productCart.Added);
  }

  viewCart():void{
    this.router.navigate(['cart']);
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
