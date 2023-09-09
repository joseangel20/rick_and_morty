const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  const { id } = req.params;

  if (isNaN(+id)) return res.status(404).json({ error: "Not fount" });

  try {
    const response = await axios(URL + id);

    const { status, name, species, origin, image, gender } = response.data;

    const character = {
      id,
      status,
      name,
      species,
      origin: origin.name,
      image,
      gender,
    };

    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getCharById;
