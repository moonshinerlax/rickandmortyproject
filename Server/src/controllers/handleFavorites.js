let myFavorites = []

function postFav(req, res){
    const favCharacter = req.body
    myFavorites.push(favCharacter)
    res.status(200).json(myFavorites)
}

function deleteFav(req, res){
  const { id } = req.params;

  const index = myFavorites.findIndex((char) => char.id === Number(id));

  if (index !== -1) {
    // If the item is found, remove it using splice
    myFavorites.splice(index, 1);
    res.status(200).json(myFavorites);
  } else {
    // If the item is not found, respond with an error status
    res.status(404).json(index);
  }
}
module.exports = {
    postFav,
    deleteFav
}
