const { Favorite } = require("../DB_connection");

async function getAllFavorites(req, res) {
    try {
    const favorite = await Favorite.findAll();
    res.status(200).send(favorite);
  } catch (error) {
    res.send(error.message);
  }
}

module.exports = getAllFavorites;
