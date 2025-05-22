const http = require("http");

const PORT = 3000;
const HOST = "127.0.0.1";

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const name = url.searchParams.get("name") || "Stranger";
  const present = url.searchParams.has("name");

  if (url.pathname === "/greet") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Hello, ${name}!\n` + `Are you present ? ${present}\n`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }

  console.log(`Request: ${req.method} ${req.url}`);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
