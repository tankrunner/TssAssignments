import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  constructor() { }
  availableQuantity=[23,20,20,20];
  Added=[0,0,0,0];
  totalItemsInCart=this.Added.reduce((a, b) => a + b, 0);
  calculate(){
    this.totalItemsInCart=this.Added.reduce((a, b) => a + b, 0);
    return this.totalItemsInCart;
  }
}
