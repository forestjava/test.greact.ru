// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Это работает на практике!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, () => {
  console.log('Listening on port 3000');
});

// run with `node server.mjs`
