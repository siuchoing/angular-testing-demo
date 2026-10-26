import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component'; // 💡 引入成功組件

export const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'checkout-success', component: CheckoutSuccessComponent } // 💡 註冊新路由
];
