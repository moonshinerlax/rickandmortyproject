const express = require("express")
const server = express()
const PORT = 3001;
const { conn } = require("./DB_connection")

conn.sync({alternate: true})
.then(()=>{
    server.listen(PORT, ()=>{
        console.log('Server raised in PORT:' + PORT)
    })
})
.catch((err)=>{
    throw new Error("Database not connected")
})

module.exports = server