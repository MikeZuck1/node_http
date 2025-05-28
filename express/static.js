const express = require("express");
const app = express();
const localhost = "localhost";

app.get("/", (req, res) => {
  console.log(req.url);
  res.send(`<h1>Mon site Node</h1>
<p>Bienvenue sur mon site Node.js !</p>`);
});

app.listen(3000, () => {
  console.log(`Server is running on http://${localhost}:${3000}`);
  console.log("Press Ctrl+C to stop the server.");
});