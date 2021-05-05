import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface ProductInterface
{
  product_availableQuantity: number;
  product_desc: string;
  product_id: number;
  product_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  arr:ProductInterface[]=[];

  getProductArray(arr:any)
  {
    this.arr=arr;
    console.log(this.arr);
  }

  visibility=["hidden","hidden","hidden","hidden"];

  constructor(private http:HttpClient) { }
  Added=[0,0,0,0];
  totalItemsInCart=this.Added.reduce((a, b) => a + b, 0);

  initializeVisibility():void{
    this.visibility=["hidden","hidden","hidden","hidden"];
  }

  calculate():number{
    this.totalItemsInCart=this.Added.reduce((a, b) => a + b, 0);
    return this.totalItemsInCart;
  }
  
}
