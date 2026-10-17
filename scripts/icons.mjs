// Renders src/app/apple-icon.png (180×180) from the logo symbol.
// Usage: node scripts/icons.mjs
import { chromium } from "@playwright/test";

const executablePath = process.env.CI ? undefined : "/opt/pw-browsers/chromium";
const html = `<!doctype html><html><body style="margin:0">
<div style="width:180px;height:180px;background:#FFFCF7;display:grid;place-items:center">
<svg width="112" height="112" viewBox="0 0 32 32">
<path d="M17 15V1A14 14 0 0 1 31 15Z" fill="#F2C14E"/>
<path d="M4 17H15V31H4A3 3 0 0 1 1 28V20A3 3 0 0 1 4 17Z" fill="#B8441F"/>
<path d="M17 17H28A3 3 0 0 1 31 20V28A3 3 0 0 1 28 31H17Z" fill="#7A2A0E"/>
</svg></div></body></html>`;

const browser = await chromium.launch(executablePath ? { executablePath } : {});
const page = await browser.newPage({ viewport: { width: 180, height: 180 } });
await page.setContent(html);
await page.screenshot({ path: "src/app/apple-icon.png", clip: { x: 0, y: 0, width: 180, height: 180 } });
await browser.close();
console.log("src/app/apple-icon.png");
