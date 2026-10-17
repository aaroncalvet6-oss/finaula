// Serves the static export (out/) under the base path, like GitHub Pages.
// Usage: node scripts/serve.mjs [port]
import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { createGzip } from "node:zlib";
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
  // Like a GitHub project site: nothing exists outside the base path.
  if (url.pathname !== basePath && !url.pathname.startsWith(`${basePath}/`)) {
    res.writeHead(404, { "content-type": "text/plain" }).end("Not found");
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
  // GitHub Pages sends max-age=600 and compresses text files.
  const type = types[extname(file)] ?? "application/octet-stream";
  const compress = /text|javascript|json|xml|svg/.test(type) && /gzip/.test(String(req.headers["accept-encoding"]));
  res.writeHead(200, {
    "content-type": type,
    "cache-control": "max-age=600",
    ...(compress ? { "content-encoding": "gzip", vary: "Accept-Encoding" } : {}),
  });
  const stream = createReadStream(file);
  (compress ? stream.pipe(createGzip()) : stream).pipe(res);
}).listen(port, () => console.log(`http://localhost:${port}${basePath}/`));
