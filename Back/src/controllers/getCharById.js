const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

function getCharByID (req, res) {
    const {id} = req.params
    axios
        .get(URL+id)
        .then((response) => {
            const id = req.params.id
            const char = response.data;
            if (char.id === Number(id)) {
                const {id, name, status, species, origin, image, gender} = char
                res.status(200)
                res.json({id, status, name, species, origin, image,gender})
              }
          })
      }

module.exports = getCharByID;