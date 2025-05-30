const routes = {
  "/": (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from home");
  },
  "/about": (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from about");
  },
  "/contact": (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello from contact");
  },
};

module.exports = routes;