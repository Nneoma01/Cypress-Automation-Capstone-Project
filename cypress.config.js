const { defineConfig } = require("cypress");


module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 60000,
  watchForFileChanges: false,
  e2e: {
    baseURL: "https://shop.qaautomationlabs.com/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
  },
});
