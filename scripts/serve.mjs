// Serves the static export (out/) under the base path, like GitHub Pages.
// Usage: node scripts/serve.mjs [port]
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const port = Number(process.argv[2] ?? 4173);
const basePath = "/finaula";
const root = new URL("../out/", import.meta.url).pathname;
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".woff2": "font/woff2",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".webmanifest": "application/manifest+json",
};

createServer((req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");
  if (!url.pathname.startsWith(basePath)) {
    res.writeHead(302, { location: `${basePath}/` }).end();
    return;
  }
  let path = normalize(decodeURIComponent(url.pathname.slice(basePath.length)) || "/");
  if (path.includes("..")) return res.writeHead(400).end();
  let file = join(root, path);
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  if (!existsSync(file)) {
    res.writeHead(404, { "content-type": types[".html"] });
    createReadStream(join(root, "404.html")).pipe(res);
    return;
  }
  res.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream" });
  createReadStream(file).pipe(res);
}).listen(port, () => console.log(`http://localhost:${port}${basePath}/`));
