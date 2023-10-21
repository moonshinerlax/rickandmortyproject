const {Favorite} = require("../DB_connection")

const deleteFav = async(req, res)=>{
    let { id } = req.params
    try {
        if(id){
            await Favorite.destroy({
                where: {id}})
            const newFavList = await Favorite.findAll()
            return res.status(201).json(newFavList)
            }
        return res.status(400).json({error: "Faltan Datos"})
        
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
}

module.exports = deleteFav;