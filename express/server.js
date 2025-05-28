const http = require("http");
const server = http.createServer();
const localhost = "localhost";
const port = 3000;

server.on("request", (req, res) => {
  let name = "Developpeur backend";
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<h1>Mon site Node</h1><p>Je suis un ${name}.</p>`);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(
      `<h1>Page Not Found</h1>
       <p>The page you are looking for does not exist.</p>
       <p>Requested URL: ${req.url} does not exist.</p>
      `
    );
  }
  console.log(`Request received: ${req.method} ${req.url}`);
});

server.listen(3000, () => {
  console.log(`Server is running on http://${localhost}:${port}`);
  console.log("Press Ctrl+C to stop the server.");
});
