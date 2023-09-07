let myFavorites = [];

function postFav(req, res) {

  for (let fav of myFavorites) {
    if (+fav.id === +req.body.id) return res.status(200).json(myFavorites);
  }
  
  myFavorites.push(req.body);
  res.status(200).json(myFavorites);
}

function deleteFav(req, res) {
  const { id } = req.params;

  myFavorites = myFavorites.filter((myFavorite) => {
    if (+myFavorite.id !== +id) return myFavorite;
  });

  res.status(200).json(myFavorites);
}

function personajes(req, res){
    res.status(200).json(myFavorites);
}

module.exports = {
  postFav,
  deleteFav,
  personajes
};
