import { defineConfig, devices } from "@playwright/test";

const executablePath = process.env.CI ? undefined : "/opt/pw-browsers/chromium";

export default defineConfig({
  testDir: "e2e",
  use: {
    baseURL: "http://localhost:3000",
    launchOptions: executablePath ? { executablePath } : {},
  },
  projects: [{ name: "mobile", use: { ...devices["Pixel 7"], launchOptions: executablePath ? { executablePath } : {} } }],
});
