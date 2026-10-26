import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';

export const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'checkout-success', component: CheckoutSuccessComponent },

  // 💡 加上這一行：當使用者輸入 http://localhost:4200/ 時，自動跳轉到 /cart
  { path: '', redirectTo: 'cart', pathMatch: 'full' } 
];
