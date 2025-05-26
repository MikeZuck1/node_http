const http = require("http");
const port = 3000;
const host = "127.0.0.1";

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/echo") {
    let body = ""; // Initialize an empty string to collect the body data
    // collect chunks (data)
    req.on("data", (chunk) => {
      body += chunk.toString(); // add chunk to body + convert Buffer to string 
      console.log(`Received chunk: ${chunk}`);
    });

    req.on("end", () => {
      try {
        if (req.headers["content-type"] === "application/json") {
          const jsonData = JSON.parse(body);
          console.log(`Received JSON data:`, jsonData);
        }
        res.end("Data received successfully");
      } catch (error) {
        res.statusCode = 415; // Bad Request
        res.end("Unsupported Media Type. Try again.");
      }
    });
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
