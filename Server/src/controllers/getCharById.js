const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

function getCharById(req, res) {
  const { id } = req.params;
  
  if (isNaN(+id)) return res.status(404).json({ error: "Not fount" });

  axios(URL + id)
    .then(({ data }) => {
      const { id, status, name, species, origin, image, gender } = data;

      const character = {
        id,
        status,
        name,
        species,
        origin,
        image,
        gender,
      };

      res.status(200).json(character);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}

module.exports = getCharById;
