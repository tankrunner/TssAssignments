import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  constructor(private http:HttpClient) { }
  Added=[0,0,0,0];
  totalItemsInCart=this.Added.reduce((a, b) => a + b, 0);

  calculate():number{
    this.totalItemsInCart=this.Added.reduce((a, b) => a + b, 0);
    return this.totalItemsInCart;
  }
  
}
