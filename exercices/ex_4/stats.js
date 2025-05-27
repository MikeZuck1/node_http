const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 8080;
const localhost = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.url === "/public/monfichier.txt") {
    const filePath = path.join(__dirname, "public", "monfichier.txt");
    const stream = fs.createReadStream(filePath, { encoding: "utf8" });
    // text/plain for .txt
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    stream.pipe(res);

    stream.on("error", (err) => {
      console.error("Error reading file:", err);
      if (!res.headersSent) {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>File not found</h1>");
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`<h1>File not found</h1><p>Requested: ${req.url}</p>`);
  }
});

server.listen(port, localhost, () => {
  console.log(`Server running at http://${localhost}:${port}/`);
});
