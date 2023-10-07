const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharByID = async (req, res) => {
    const {id} = req.params
    try {
        const {name, gender, species, origin, image, status}= (await axios(URL + id)).data;
        const character = {id, name, gender, species, origin, image, status}
        return character.name
            ? res.json(character)
            : res.status(400).send("Character Not Found")
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
      }

module.exports = getCharByID;