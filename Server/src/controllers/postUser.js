const { User } = require("../DB_connection");

async function postUser(req, res) {
  const { email, password } = req.query;
  let len = 0;
  
  if (!email || !password) {
    return res.status(400).send({ error: "Faltan datos" });
  }

  try {
    const [data, created] = await User.findOrCreate({
      where: { id: ++len, email, password },
    });
    res.status(200).send(data.dataValues);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = postUser;
