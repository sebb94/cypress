import { defineConfig } from "cypress";

export default defineConfig({
  "video": false,
  "screenshotOnRunFailure": false,
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      "env1" : "env_one",
      "env2" : "env_two"
    }
  },
});
