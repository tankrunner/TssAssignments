import { Component, OnInit } from '@angular/core';
import { ProductCartService } from 'src/Services/product-cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { ProductInterface } from 'src/Services/product-cart.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;
  subscription: Subscription;
  arr: ProductInterface[] = [];
  cartCount: number;

  constructor(private productCart: ProductCartService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.cartCount = 0;

    // this.http.post("https://localhost:44356/productcart/addQuantity", { "id": 1 }, { observe: "response" }).subscribe(
    //   data => { console.log(data); });

    this.subscription=this.http.get("https://localhost:44356/product").subscribe(
      data => {
        this.product = data;
        console.log(data[0]["product_name"]);
        for (let k in data) {
          console.log(data[k]);
          this.arr.push(<ProductInterface>data[k]);
        }
      },
      err => {
        console.log("Error in recieving data");
      },
      () => {
        console.log(this.arr);
        // this.productCart.getProductArray(this.arr);
      }
    );

  }

  disableBtn(event: any):void{
    console.log(event);
    event.target.disabled=true;
  }

  add(pid: number): void {
    this.productCart.arr.push(<ProductInterface>this.arr[pid]);
    console.log(pid);
    console.log(this.productCart.arr);
    this.cartCount += 1;
    
  }

  // viewCart():void{
  //   this.router.navigate(['cart']);
  // } [routerLink] in HTML

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

//this.productCart.visibility[pid]="visible";
//this.productCart.Added[pid]=1;
//this.total=this.productCart.calculate();
//console.log(this.productCart.Added);
// this.http.post("https://localhost:44356/productcart/addQuantity",{"id":pid},{observe:"response"}).subscribe(
//   data=>{console.log(data);});