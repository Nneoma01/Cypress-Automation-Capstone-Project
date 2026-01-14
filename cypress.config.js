const { defineConfig } = require("cypress");
// const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  watchForFileChanges: false,
  e2e: {
    baseURL: "https://shop.qaautomationlabs.com/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //  allureCypress(on, config, {
      //   resultsDir: "allure-results",
      // });
      require("allure-cypress/reporter")(on);
      return config;
    },
  },

   // specPattern: "cypress/e2e/*.cy.js",
  retries: 1,
});
