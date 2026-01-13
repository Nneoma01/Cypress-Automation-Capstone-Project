const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

   // specPattern: "cypress/e2e/*.cy.js",
  retries: 1,
  env: {
    baseURL: "https://shop.qaautomationlabs.com/index.php",
  }
});
