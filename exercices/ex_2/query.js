const http = require("http");

const PORT = 3000;
const HOST = "127.0.0.1";

const server = http.createServer((req, res) => {
/**
 * new method to parse the URL 
 * ${req.headers.host} -> contient l'en tête HTTP "host" de la requête.
 * Cet en-tête indique le nom de domaine (et éventuellement le port).
 * Si l'utilisateur visite https://monsite.com/api/data, alors req.headers.host = "monsite.com"
 */
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

  // console.log(`Request: ${req.method} ${req.url}`);
  console.log(`This is a`, url.pathname);
  console.log(`Query ${url.search}`);
  console.log(`Name: ${name}`);
  
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});
