const { Favorite } = require("../DB_connection");

async function deleteFav(req, res) {
  const { id } = req.params;

  try {
    await Favorite.destroy({ where: { id } });
    const favorites = await Favorite.findAll();
    res.status(200).send(favorites);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = deleteFav;
