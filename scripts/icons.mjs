// Renders src/app/apple-icon.png (180×180) from the logo symbol.
// Usage: node scripts/icons.mjs
import { chromium } from "@playwright/test";

const executablePath = process.env.CI ? undefined : "/opt/pw-browsers/chromium";
const overlap = "M12 8A11 11 0 0 1 22.954 20H16.5A4.5 4.5 0 0 1 12 15.5Z";
const html = `<!doctype html><html><body style="margin:0">
<div style="width:180px;height:180px;background:#FFFCF7;display:grid;place-items:center">
<svg width="116" height="116" viewBox="0 0 32 32">
<rect x="12" y="2" width="18" height="18" rx="4.5" fill="#F2C14E"/>
<circle cx="12" cy="19" r="11" fill="#B8441F"/>
<path d="${overlap}" fill="#7A2A0E"/>
</svg></div></body></html>`;

const browser = await chromium.launch(executablePath ? { executablePath } : {});
const page = await browser.newPage({ viewport: { width: 180, height: 180 } });
await page.setContent(html);
await page.screenshot({ path: "src/app/apple-icon.png", clip: { x: 0, y: 0, width: 180, height: 180 } });
await browser.close();
console.log("src/app/apple-icon.png");
