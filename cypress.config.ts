import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require('cy-verify-downloads');

export default defineConfig({
  "video": false,
  "screenshotOnRunFailure": false,
  e2e: {
    baseUrl: "http://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks);
    },
    env: {
      env1 : "env_one",
      env2 : "env_two",
      demoQA: "https://demoqa.com",
      theInternet: "https://the-internet.herokuapp.com",
      angular: "https://globalsqa.com"
    },
    viewportHeight: 1080,
    viewportWidth: 1920
  },
});
