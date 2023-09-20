const axios = require('axios')

function getCharByID (res, id) {
    axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
            const char = response.data;
            if (!id) {
                res.writeHead(404, { 'content-type': 'text/plain' });
                res.end("Error message: 'ponle un id we'");
            } else if (char.id.toString() === id) {
                res.writeHead(200, { 'content-type': 'application/json' });
                res.end(JSON.stringify(char));
              }
          })
          .catch((error) => {
            console.error(error.response.data);
            res.writeHead(500, { 'content-type': 'text/plain' });
            res.end(`Internal server error: ${error.response.data.error}`);
          });
      }

module.exports = { getCharByID };