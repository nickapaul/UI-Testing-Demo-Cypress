const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Use the `on` function to hook into various events Cypress emits
      // e.g., to configure the mochawesome reporter
      const mochaReporterOptions = {
        reporter: 'mochawesome',
        reporterOptions: {
          reportDir: 'cypress/reports/mocha',
          overwrite: true,
          html: false,          
          xml: true
        }
      };
      on('before:run', () => {
        console.log('Configuring mochawesome reporter');
      });
      // Here you can modify the config object as needed
      config.reporter = mochaReporterOptions.reporter;
      config.reporterOptions = mochaReporterOptions.reporterOptions;
      return config; // Important: return the modified config
    },
    viewportWidth: 1920,
    viewportHeight: 1080
  },
});