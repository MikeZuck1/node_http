const http = require("http");
const fs = require("fs");
const PORT = 8080;
const HOST = "127.0.0.1";

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const vue = url.href;

  if (url.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>Bienvenue sur la page d'abonnement d'Abonify</h1>
    `);
  } else if (url.pathname === "/subscribe") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>Abonnement</h1>
      <p>Merci de vous être abonné à notre service !</p>
      <p>Nous sommes ravis de vous accueillir dans notre communauté.</p>
      <p>Nous vous enverrons des mises à jour régulières sur nos nouveaux produits et services.</p>
      <p>Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter.</p>
      <p>Merci encore de vous être abonné à Aboniify !</p>
      <p>Nous espérons que vous apprécierez notre service.</p>
      <p>À bientôt !</p>
      <p>Votre équipe Aboniify</p>
    `);
  } else if (url.pathname === "/unsubscribe") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>Se Désabonner</h1>
      <p>Triste de vous voir partir. Expliquez-nous les raisons de votre départ.</p>
      <p>Nous espérons que vous avez apprécié notre service.</p>
      <p>Si vous avez des questions ou des préoccupations, n'hésitez pas à nous contacter.</p>
      <p>Merci encore d'avoir utilisé Aboniify !</p>
      <p>Votre équipe Aboniify</p>
    `);
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(`
      <h1>404 Not Found</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <p>Veuillez vérifier l'URL et réessayer.</p>
      <p>Si vous pensez que c'est une erreur, veuillez nous contacter.</p>
      <p>Merci de votre compréhension.</p>
      <p>Votre équipe Aboniify</p>
      <p>URL demandée: ${vue}</p>
    `);
  }

  console.log(vue);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});