const { Router } = require('express')
const getCharById = require('../controllers/getCharById')
const postFav = require('../controllers/postFav')
const postUser = require('../controllers/postUser')
const login = require('../controllers/login')
const deleteFav = require('../controllers/deleteFav')
const mainRouter = Router()

mainRouter.get('/character/:id', getCharById)

mainRouter.get('/login', login)

mainRouter.post('/login', postUser)

mainRouter.post('/fav', postFav)

mainRouter.delete('/fav/:id', deleteFav)

module.exports = mainRouter
