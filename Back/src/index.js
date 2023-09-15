const dataB = require('./utils/data')
const http = require('http')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req

    if(url.includes("/rickandmorty/character")){
        const lastI = url.lastIndexOf('/')
        const id = url.slice(lastI + 1)
      res.writeHead(200, {'content-type' : 'application/json'})
        dataB.map((char)=>{
            if(char.id.toString() === id){
                return  res.end(JSON.stringify(char))
    }})}

    else{
    res.writeHead(404);
    res.end();}
}).listen(3001, 'localhost')