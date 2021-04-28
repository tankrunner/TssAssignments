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
    this.http.post("https://localhost:44356/productcart/addQuantity",{"id":1},{observe:"response"}).subscribe(
      data=>{console.log(data);});

    this.total=this.productCart.totalItemsInCart;
    
    console.log(this.productCart.Added);
        
    this.subscription=this.http.get("https://localhost:44356/product").subscribe(data=>{
      console.log(data);
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
    // this.http.post("https://localhost:44356/productcart/addQuantity",{"id":pid},{observe:"response"}).subscribe(
    //   data=>{console.log(data);});
  }

  // viewCart():void{
  //   this.router.navigate(['cart']);
  // } [routerLink] in HTML

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

}
