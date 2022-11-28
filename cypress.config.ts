import { defineConfig } from "cypress";

export default defineConfig({
  "video": false,
  "screenshotOnRunFailure": false,
  e2e: {
    baseUrl: "https://www.olx.pl",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
