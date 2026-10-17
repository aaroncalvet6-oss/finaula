import { defineConfig, devices } from "@playwright/test";

// In CI Playwright uses its own browser; locally, the preinstalled Chromium.
const launchOptions = process.env.CI ? {} : { executablePath: "/opt/pw-browsers/chromium" };

export default defineConfig({
  testDir: "e2e",
  timeout: 60_000,
  retries: process.env.CI ? 1 : 0,
  use: {
    baseURL: "http://localhost:4173/finaula/",
    trace: "retain-on-failure",
  },
  projects: [{ name: "mobile", use: { ...devices["Pixel 7"], launchOptions } }],
  // Serves the static export exactly as GitHub Pages would (run `npm run build` first).
  webServer: {
    command: "node scripts/serve.mjs 4173",
    url: "http://localhost:4173/finaula/",
    reuseExistingServer: !process.env.CI,
  },
});
