const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config()
const getCharById = require("../controllers/getCharById");
const postUser = require("../controllers/postUser");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const getAllFavorites = require("../controllers/getAllFavorites");

const {JWT_SECRET} = process.env;

function verifyToken(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: 'Token no proporcionado' });
    }
  
    jwt.verify(token,"jose20", (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token no válido' });
        }
        
        // Si el token es válido, puedes almacenar la información del usuario en el objeto de solicitud para que esté disponible en rutas posteriores
        req.user = decoded;

      // Llama a next() para pasar la solicitud al siguiente middleware o controlador
      next();
    });
  }

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.get("/fav", getAllFavorites);

router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
