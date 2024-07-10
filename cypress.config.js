const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "junit",

  reporterOptions: {
    mochaFile: "cypress/reports/mocha",
    toConsole: true,
  },

  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
