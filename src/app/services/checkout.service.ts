import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CheckoutService {
  constructor(private http: HttpClient) {}

  submitOrder(orderData: { total: number }): Observable<any> {
    return this.http.post('/api/checkout', orderData);
  }
}
