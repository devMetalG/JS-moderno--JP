const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1300,
  viewportHeight: 860,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
