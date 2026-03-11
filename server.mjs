import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const DIST = join(__dirname, 'dist');
const PORT = process.env.PORT || 4321;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.txt': 'text/plain',
};

createServer(async (req, res) => {
  let url = req.url.split('?')[0];
  if (url === '/' || url === '') url = '/index.html';

  let file = join(DIST, url);

  try {
    const s = await stat(file);
    if (s.isDirectory()) file = join(file, 'index.html');
  } catch {
    if (!extname(url)) file = join(DIST, url, 'index.html');
    try {
      await stat(file);
    } catch {
      file = join(DIST, '404.html');
    }
  }

  try {
    const content = await readFile(file);
    const ct = MIME[extname(file)] || 'application/octet-stream';
    res.writeHead(200, { 'Content-Type': ct, 'Cache-Control': 'public, max-age=3600' });
    res.end(content);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
}).listen(PORT, '0.0.0.0', () => {
  console.log(`Atlas Landing listening on :${PORT}`);
});
