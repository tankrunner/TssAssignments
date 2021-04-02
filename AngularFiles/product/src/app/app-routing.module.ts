import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"payment",
    component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
