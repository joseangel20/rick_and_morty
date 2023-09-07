const [user] = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;

  if (user.email === email && user.password === password)
    res.status(200).json({ access: true });
  else res.status(200).json({ access: false });
}


module.exports = login;