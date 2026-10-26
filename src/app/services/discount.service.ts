import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DiscountService {
  applyCoupon(total: number, code: string): number {
    if (code === 'MINUS_100' && total >= 1000) {
      return total - 100;
    }
    return total;
  }
}