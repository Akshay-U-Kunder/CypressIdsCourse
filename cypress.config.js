const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "sfixbc",
  watchForFileChanges: false,
  reporter: "cypress-mochawesome-reporter",
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on)
    },
    /* defaultCommandTimeout: 3000,
    retries: {
      experimentalStrategy: "detect-flake-and-pass-on-threshold",
      experimentalOptions: {
        maxRetries: 3,
        passesRequired: 1,
      },
      openMode: true,
      runMode: true,
    },
    retries: {
      experimentalStrategy: "detect-flake-but-always-fail",
      experimentalOptions: {
        maxRetries: 3,
        stopIfAnyPassed: true,
      },
      openMode: true,
      runMode: true,
    }, */
    env: {
      CYPRESS_RECORD_KEY:
        process.env.CYPRESS_RECORD_KEY ||
        "f9649ca1-83b1-4091-8b96-82894fdc1bf6",
      snapshotOnly: true,
    },
  },
})
