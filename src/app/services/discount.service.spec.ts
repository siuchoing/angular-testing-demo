import { DiscountService } from './discount.service';

describe('DiscountService 單元測試', () => {
  it('應該正確計算滿千折百', () => {
    // 💡 像一般 JS 一樣直接 new 類別，速度極快，完全隔離外部環境
    const service = new DiscountService(); 
    
    const result = service.applyCoupon(1000, 'MINUS_100');
    
    // 驗證數學邏輯是否正確
    expect(result).toBe(900); 
  });
});