const { Router } = require('express')
const getCharById = require('../controllers/getCharById')
const {postFav, deleteFav} = require('../controllers/handleFavorites')
const login = require('../controllers/login')
const mainRouter = Router()

mainRouter.get('/character/:id', getCharById)

mainRouter.get('/login', login)

// mainRouter.get('/', (req, res)=>{
//     console.log(postFav)
// })

mainRouter.post('/fav', postFav)

mainRouter.delete('/fav/:id', deleteFav)

module.exports = mainRouter
