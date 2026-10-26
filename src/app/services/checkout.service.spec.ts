import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CheckoutService } from './checkout.service';

describe('CheckoutService 整合測試', () => {
  it('點擊結帳時，應該發送正確的 HTTP 請求', () => {
    // 💡 啟動 Angular 測試環境並注入測試專用網路模組
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    const service = TestBed.inject(CheckoutService);
    const httpMock = TestBed.inject(HttpTestingController);

    service.submitOrder({ total: 900 }).subscribe();

    // 驗證水管：有沒有正確把資料送到指定的網址
    const req = httpMock.expectOne('/api/checkout');
    expect(req.request.method).toBe('POST');
    
    req.flush({ success: true }); // 模擬後端回傳成功資料
  });
});
