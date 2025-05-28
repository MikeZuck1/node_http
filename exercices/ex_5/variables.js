const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const title = "Mon site Node";
  if (req.url === "/" || req.url === "/index.html") {
    fs.readFile("index.html", (err) => {
      if (err) {
        console.log("Error loading index.html file.", req.url);
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("Error loading index.html", err);
        return;
      } else {
        console.log("Successfully loaded index.html file.", req.url);
        res.writeHead(200, { "Content-Type": "text/html" });
        let content = fs.readFileSync("index.html", "utf8");
        content = content.replace("{{title}}", title);
        res.end(content);
      }
    });
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
