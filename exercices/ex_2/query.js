const url = require("url");
const http = require("http");
const myURL = "https://example.com/greet?name=Sarah";
const qs = new URL(`${myURL}`);
const query = qs.searchParams.get("name");
const PORT = 3000;
const localhost = "127.0.0.1";


const server = http.createServer((req, res) => {
  if (req.url === `${query}`) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Hello ${query}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

server.listen(PORT, () => {
  console.log(`server is running on http://${localhost}:${PORT}`);
});
