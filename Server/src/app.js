const server = require("./app.js")
const express = require("express")
const mainRouter = require('./routes/index')
const cors = require('cors')

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept')
    res.header( 'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE')
    next()
});
server.use(cors());
server.use(express.json())

server.use('/rickandmorty', mainRouter)
