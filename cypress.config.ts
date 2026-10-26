import { defineConfig } from "cypress";

export default defineConfig({
   e2e: {
    baseUrl: 'http://localhost:4200', // 💡 加上這一行！
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
