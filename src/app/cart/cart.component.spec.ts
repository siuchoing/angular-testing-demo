import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';

// 使用 describe 定義一組針對 'CartComponent' 的測試任務群組（Test Suite）
describe('CartComponent', () => {
  // 宣告一個變數用來存放受測元件的實例，方便在各個 it 測試案例中呼叫其屬性和方法
  let component: CartComponent;
  // 宣告一個變數用來存放元件的測試夾具（Fixture），它負責控制元件的生命週期、DOM 元素與變更偵測
  let fixture: ComponentFixture<CartComponent>;

  // beforeEach: 在執行每個測試案例（it）之前，都會先執行這個 Hook 函式  (非同步初始化設定)
  beforeEach(async () => {
    // 使用 await 等待 Angular 配置動態測試模組
    await TestBed.configureTestingModule({
      // 💡 針對 Angular 14+ 的 Standalone（獨立）元件，必須將其放在 imports 欄位中導入
      imports: [CartComponent],
    // 編譯元件的範本（HTML）與樣式（CSS），確保元件能正常渲染
    }).compileComponents();

    // 建立 CartComponent 的測試實例，並將控制權交給 fixture 夾具
    fixture = TestBed.createComponent(CartComponent);
    // 透過夾具取得實際的元件類別實例（Instance），並指派給 component 變數
    component = fixture.componentInstance;
    // 使用 await 等待元件內所有非同步操作（如 Promise、微任務）穩定下來，確保初始化完全就緒
    await fixture.whenStable();
  });

  // 定義一個最基礎的具體測試任務（Test Case）：驗證元件是否成功被建立
  it('should create', () => {
    // 斷言（Assert）並預期 component 實例物件是存在的、非空值（Truthy）
    expect(component).toBeTruthy();
  });
});