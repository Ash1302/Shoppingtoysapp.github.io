import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes:Routes=[
  {path: '', component: ShoppingCartComponent},
  {path:'ShoppingCart',component: ShoppingCartComponent},
  {path:'cartdetails',component: CartDetailsComponent},
  {path: '* *', redirectTo:'404'}
 ];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports:[ RouterModule]
  
})
export class AppRoutingModule { 
  
}
