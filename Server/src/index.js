const http = require("http");
const getCharById = require("./controllers/getCharById");

const options = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const id = req.url.split("/").at(-1);
  
  if (req.url.includes("/rickandmorty/character")) {
    getCharById(res, id);
  }
};

const server = http.createServer(options);

const port = 3001;
server.listen(port);
