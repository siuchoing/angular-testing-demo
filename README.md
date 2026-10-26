# 💡 1. 全域安裝 Angular CLI 工具
npm install -g @angular/cli

# 💡 2. 建立一個全新的 Angular 專案（會包含內建的單元與整合測試架構）
cd angular-testing-demo

# 💡 3. 安裝 UAT 測試工具 (Cypress) 
npm install cypress --save-dev

# 4. Run unit and integration tests
npm run test

# 5. Run in terminal B
npm start

# 6. Run in terminal A (For e2e test)
npx cypress open  # 首次執行會自動在專案中建立 cypress 資料夾結構
