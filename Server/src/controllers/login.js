const { User } = require("../DB_connection");

require("dotenv").config();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
// Esta función genera un token con la información del usuario
function generateToken(user) {
  const expiresIn = "1h"; // El token expirará en 1 hora

  // Información que quieres incluir en el token (puede ser cualquier cosa)
  const payload = {
    userId: user.id,
    username: user.email,
  };

  // Generar el token
  const token = jwt.sign(payload, "jose20", { expiresIn });

  return token;
}

async function login(req, res) {
  const { email, password } = req.query;

  if (!email || !password) {
    return res.status(400).send({ error: "Faltan datos" });
  }

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) return res.status(400).send({ error: "Usuario no encontrado" });

    if (user.dataValues.password !== password)
      return res.status(400).send({ error: "Contraseña incorrecta" });

    const token = generateToken({ id: user.dataValues.id, email });
    res.status(200).send({ access: true, token });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = login;
