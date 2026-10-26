import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CheckoutService } from './checkout.service';

// Define a set of test tasks / Test Suite
describe('CheckoutService 整合測試', () => {
  // Define a task
  it('點擊結帳時，應該發送正確的 HTTP 請求', () => {
    // [Arrange 準備階段] ----------------------------------------------------------------------

    // 💡 啟動 Angular 測試環境並注入測試專用網路模組
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    
    // 從 Angular 依賴注入（DI）系統中取得 CheckoutService 的實例，準備進行測試
    const service = TestBed.inject(CheckoutService);
    
    // 從注入系統中取得 HttpTestingController 控制器，用來檢查、控制與模擬 HTTP 的請求與回應
    const httpMock = TestBed.inject(HttpTestingController);
    
    // [Act 執行階段] -------------------------------------------------------------------------
    
    // 呼叫受測服務的 submitOrder 方法並立即訂閱（Subscribe），此操作會在底層觸發 HttpClient 發送請求
    service.submitOrder({ total: 900 }).subscribe();

    // [Assert 驗證階段] -----------------------------------------------------------------------

    // 預期並檢查是否有且僅有一個 HTTP 請求發送到 '/api/checkout' 網址，並將該請求物件存入 req 變數
    const req = httpMock.expectOne('/api/checkout');
    
    // 斷言（Assert）並驗證這個被攔截的 HTTP 請求，其發送方法（Method）是否正確為 'POST'
    expect(req.request.method).toBe('POST');
    
    // 模擬後端伺服器成功收到請求，並將假資料 { success: true } 沖刷（Flush）回傳給前端的訂閱者
    req.flush({ success: true }); 
  });
});
