import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// 使用 @Injectable 裝飾器，並設定為全域單例（root），代表整個應用程式會共用同一個實例
@Injectable({ providedIn: 'root' })
// 定義並導出名為 CheckoutService 的結帳服務類別
export class CheckoutService {
  // 透過建構子（Constructor）依賴注入 HttpClient，並宣告為私有屬性 http 供內部方法呼叫
  constructor(private http: HttpClient) {}

  // 定義送出訂單的方法，接收訂單資料物件（包含總金額 total），並回傳一個 Observable
  submitOrder(orderData: { total: number }): Observable<any> {
    // Send HTTP POST Request 至 後端 API 端點 '/api/checkout'，並將訂單資料作為 Request Body 傳送
    return this.http.post('/api/checkout', orderData);
  }
}
