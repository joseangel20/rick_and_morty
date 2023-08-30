const http = require("http");
const { characters } = require("./utils/data");

const options = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const id = req.url.split("/");

  if (req.url.includes("/rickandmorty/character")) {
    for (let character of characters) {
      if (character.id === +id[id.length - 1]) {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(character));
      }
    }
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ error: "El personaje no existe" }));
  }
  res.writeHead(404 , { "Content-Type": "text/plain" });
  return res.end("Page not found");
 
};

const server = http.createServer(options);

const port = 3001;
server.listen(port);
