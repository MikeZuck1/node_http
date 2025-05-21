const HTTP = require("http");
const routes = require("./obj.js");
const localhost = "127.0.0.1";
const PORT = 3000;

const server = HTTP.createServer((req, res) => {
  if (routes[req.url]) {
    routes[req.url](req, res); // we call the right function of table.
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found\n");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on http://${localhost}:${PORT}`);
});