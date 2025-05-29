# 🌐 Node HTTP Server – Série de mini-projets #2

---

## Exercice 1 – Serveur minimal  
Objectif : retourner un texte simple avec les bons en-têtes.
1. Crée un serveur sur le port 3000.
2. `/` → réponse **200** avec le texte "Hello HTTP Server".  
3. Ajoute un en-tête `Content-Type: text/plain`.
4. Affiche en console chaque requête reçue (méthode + URL).

---

## Exercice 2 – Routage via une table d’objets
Objectif : éviter les multiples `if/else`.
1. Crée un objet qui mappe les routes (`/`, `/about`, `/contact`) à des fonctions.
2. Recherche `req.url` dans cet objet. Si introuvable, retourne un 404.
3. Le code total doit faire moins de 30 lignes.

---

## Exercice 3 – Lire les query strings
Objectif : analyser les paramètres d’URL.  
1. Si on appelle `/greet?name=Sarah`, la réponse doit être "Hello, Sarah !".  
2. Utilise la classe `URL` (`new URL(req.url, base)`).  
3. Si `name` est absent, afficher "Stranger".

---

## Exercice 4 – Lire le corps d’une requête POST
Objectif : récupérer du JSON envoyé par un client.
1. POST `/echo` avec un JSON → retourne le même JSON.
2. Assemble les `data` en chunks (petits morceaux), puis `JSON.parse`. 
3. Si le body n’est pas JSON, retourne un code 415 (Unsupported Media Type).

---

## Exercice 5 – Mini serveur de fichiers statiques
Objectif : servir des fichiers depuis un dossier `public/`.
1. Une requête `/public/monfichier.text` doit renvoyer ce fichier.  
2. Déduis le `Content-Type` selon l’extension (.html, .css, .jpg, etc.).  
3. Utilise `fs.createReadStream` pour ne pas tout charger en mémoire.  
4. Retourne un 404 si le fichier est absent.

---

## Exercice 6 – Remplacement de variable dans un HTML
Objectif : injecter un nom dans un modèle HTML.
1. Crée un `index.html` contenant `{{title}}`. ✅
2. Avant d’envoyer le fichier, remplace `{{title}}` par “Mon site Node”. 
3. N’utilise pas de moteur de template, juste `String.replace`.

---

## Exercice 7 – En-têtes personnalisés & cache
Objectif : gérer le cache navigateur.
1. Pour les assets statiques (`.css`, `.js`, images), ajoute l’en-tête  
   `Cache-Control: public, max-age=86400`.
2. Vérifie via l’onglet Réseau que le fichier est bien mis en cache.

---

## Exercice 8 – Redirection simple (301 - Moved Permanently)
Objectif : utiliser le code de statut 301.
1. Une visite à `/old-about` doit rediriger vers `/about`.
2. Ajoute un en-tête `Location`.

---

## Exercice 9 – Streaming JSON massif  
Objectif : envoyer des données ligne par ligne.  
1. Crée un tableau de 10 000 objets.  
2. Envoie-le en NDJSON (1 ligne JSON par objet) via `/bigdata`.
3. Le client doit commencer à recevoir les données sans attendre la fin.

---

## Exercice 10 – Mini API REST (sans Express)
Objectif : corriger l’exo précédent et compléter l’API.  
1. Crée un tableau `users` en mémoire.  
2. `GET  /users` → retourne la liste des utilisateurs (JSON).  
3. `POST /users` → ajoute un nom depuis le body JSON, retourne un 201 (created).  
4. `GET  /users/ID` → retourne l’utilisateur avec cet ID ou 404.  
5. Utilise une regex pour extraire `/users/(\d+)`.  
6. Toujours sans Express.

---

### Bonus
Pour aller plus loin :

* **Compression** : si le client accepte `gzip`, compresse `/bigdata` avec `zlib.createGzip()`  
* **Fermeture propre** : intercepte `SIGINT` (Ctrl+C) pour fermer proprement le serveur avant `process.exit()`  