describe('顧客購買流程 UAT 測試', () => {
  it('真實使用者應該能順利完成購買並看到成功畫面', () => {
    // 💡 1. 模擬真人打開瀏覽器，走到購物車頁面
    cy.visit('/cart');

    // 💡 2. 模擬真人輸入折扣碼、點擊按鈕
    cy.get('#coupon-input').type('MINUS_100');
    cy.get('#checkout-btn').click();

    // 💡 3. 驗證最終結果：畫面有沒有成功跳轉，且顯示感謝購買
        // 讀取瀏覽器當前的網址（URL），並斷言（Assert）預期它必須包含 '/checkout-success' 字樣
    cy.url().should('include', '/checkout-success');
        // 抓取頁面上的第一個 h1 標籤，並斷言驗證其內文必須包含「感謝您的購買！」這段文字
    cy.get('h1').should('contain', '感謝您的購買！');
  });
});
