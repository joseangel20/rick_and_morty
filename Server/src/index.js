const express = require("express")
const router = require('./routes/index')

const PORT = 3001;

server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json());

 server.use('/rickandmorty', router)

server.listen(PORT,()=>{
    console.log("El sevidor esta escuchando en el puerto: http://localhost:" + PORT);
});

