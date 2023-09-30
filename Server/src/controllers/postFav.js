const { Favorite } = require("../DB_connection");

async function postFav(req, res) {
  const { id, name, origin, status, image, species, gender } = req.body;
  if (!name || !origin || !status || !image || !species || !gender)
    return res.status(401).send({ error: "Faltan datos" });
  try {
    await Favorite.findOrCreate({
      where: {
        id,
        name,
        origin,
        status,
        image,
        species,
        gender,
      },
    });
    
    const favoritos = await Favorite.findAll();
    res.status(200).send(favoritos);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

module.exports = postFav;
