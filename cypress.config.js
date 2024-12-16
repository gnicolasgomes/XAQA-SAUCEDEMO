const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  e2e: {
    pageLoadTimeout: 30000, // 30 segundos
    requestTimeout: 30000,   // 30 segundos
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      DEBUG: 'cypress:*',
    },
  },
});
