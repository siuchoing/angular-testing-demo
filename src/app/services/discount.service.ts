// 從 Angular 核心模組匯入 Injectable 裝飾器，讓此類別具備依賴注入（DI）的功能
import { Injectable } from '@angular/core';

// 使用 ＠Injectable 裝飾器，並設定為全域單例（root），代表整個應用程式會共用同一個實例，且不需在 Module 的 providers 中手動註冊
@Injectable({ providedIn: 'root' })
// 定義並導出名為 DiscountService 的商業邏輯類別，供其他元件或服務匯入使用
export class DiscountService {
  // 定義一個名為 applyCoupon 的公開方法，接收原始金額與折扣碼，並回傳計算後的最終金額（數字型態）
  applyCoupon(total: number, code: string): number {
    if (code === 'MINUS_100' && total >= 1000) {
      return total - 100;
    }
    return total; // 👈 這裡！當金額小於 1000（例如 50）時，它會直接回傳原價 50，並不會拋出錯誤！
  }
}
