const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
  } else {
    res.writeHead(404, {
      "Content-Type": "text/plain",
    });
    res.end("404 Not Found\n");
    console.log(`404 Not Found: ${req.method} ${req.url}`);
    return;
  }
  res.end("Hello HTTP Server\n");
  console.log(`Request received: ${req.method} ${req.url}`);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
