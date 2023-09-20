const { getCharByID } = require('./controllers/getCharById');
const dataB = require('./utils/data')
const http = require('http')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req

    if(url.includes("/rickandmorty/character")){
        const id = req.url.split('/').pop()
        console.log(id)
        getCharByID(res, id)
    }
    else{
    res.writeHead(404);
    res.end();}
}).listen(3001, 'localhost')