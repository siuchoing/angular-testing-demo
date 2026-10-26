describe('顧客購買流程 UAT 測試', () => {
  it('真實使用者應該能順利完成購買並看到成功畫面', () => {
    // 💡 1. 模擬真人打開瀏覽器，走到購物車頁面
    cy.visit('/cart');

    // 💡 2. 模擬真人輸入折扣碼、點擊按鈕
    cy.get('#coupon-input').type('MINUS_100');
    cy.get('#checkout-btn').click();

    // 💡 3. 驗證最終結果：畫面有沒有成功跳轉，且顯示感謝購買
    cy.url().should('include', '/checkout-success');
    cy.get('h1').should('contain', '感謝您的購買！');
  });
});
