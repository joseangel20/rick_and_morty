const http = require("http");
const { characters } = require("./utils/data");

const options = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const PATHURL = req.url.split("/");

  if (req.url.includes("/rickandmorty/character")) {
    for (let character of characters) {
      if (character.id === +PATHURL[PATHURL.length - 1]) {
        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(character));
      }
    }
  }
  
  res.writeHead(404)
  res.end();
};

const server = http.createServer(options);

const port = 3001;
server.listen(port);
