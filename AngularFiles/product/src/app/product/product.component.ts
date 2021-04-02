import { Component, OnInit } from '@angular/core';
import { ProductCartService } from 'src/Services/product-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  total:number;
  availability:number[];

  constructor(private productCart:ProductCartService,private router:Router) { 
    this.total=productCart.totalItemsInCart;
    console.log(productCart.Added);
  }

  ngOnInit(): void {
    this.availability=this.productCart.availableQuantity;
  }

  add(pid:number){
    this.productCart.Added[pid]=1;
    this.total=this.productCart.calculate();
    console.log(this.productCart.Added);
  }

  viewCart(){
    this.router.navigate(['cart']);
  }

}
