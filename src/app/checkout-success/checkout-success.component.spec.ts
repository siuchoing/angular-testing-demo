import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutSuccessComponent } from './checkout-success.component';

// 使用 describe 定義一組針對 'CheckoutSuccessComponent' 的測試任務群組（Test Suite）
describe('CheckoutSuccessComponent', () => {
  // 宣告一個變數用來存放受測元件的實例，方便在各個 it 測試案例中呼叫其屬性和方法
  let component: CheckoutSuccessComponent;
  // 宣告一個變數用來存放元件的測試夾具（Fixture），負責控制元件的生命週期、DOM 元素與變更偵測
  let fixture: ComponentFixture<CheckoutSuccessComponent>;

  // beforeEach: 在執行每個測試案例（it）之前，都會先執行這個 Hook 函式 (非同步初始化設定)
  // 確保每個測試案例都在完全乾淨、重新初始化的測試環境下獨立執行，避免測試間互相污染
  beforeEach(async () => {
    // 使用 await 等待 Angular 配置動態測試模組
    await TestBed.configureTestingModule({
      // 💡 針對 Angular Standalone（獨立）元件，必須將其放在 imports 欄位中導入
      imports: [CheckoutSuccessComponent],
    // 編譯元件的範本（HTML）與樣式（CSS），確保元件能正常渲染
    }).compileComponents();

    // 建立 CheckoutSuccessComponent 的測試實例，並將控制權交給 fixture 夾具
    fixture = TestBed.createComponent(CheckoutSuccessComponent);
    // 透過夾具取得實際的元件類別實例（Instance），並指派給 component 變數
    component = fixture.componentInstance;
    // 使用 await 等待元件內所有非同步操作（如 Promise、微任務）穩定下來，確保初始化完全就緒
    await fixture.whenStable();
  });

  // it 負責定義這組任務中的一個具體測試任務（Define a single test task / Test Case）
  it('should create', () => {
    // 斷言（Assert）並預期 component 實例物件是成功被建立且存在的、非空值（Truthy）
    expect(component).toBeTruthy();
  });
});
