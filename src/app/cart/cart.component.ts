import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 💡 引入路由工具

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  // 💡 注入 Router 服務
  constructor(private router: Router) {}

  // 💡 建立點擊結帳後的行為
  onCheckout() {
    this.router.navigate(['/checkout-success']); // 跳轉到成功頁面
  }
}
