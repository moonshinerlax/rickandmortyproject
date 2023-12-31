const {Favorite} = require("../DB_connection")

const postFav = async (req, res)=>{
    const {id, name, origin, status, image, species, gender} = req.body

    try {
        
    if(!id || !name || !origin||!status||!image|| !species || !gender){
        return res.status(401).send("faltan datos")
    }
    await Favorite.findOrCreate({
        where: {id, name, origin, status, image, species, gender}})
    const FavList = await Favorite.findAll()
     return res.status(200).json(FavList)        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

module.exports = postFav;