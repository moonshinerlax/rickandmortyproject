const users = require('../utils/users')

function login(req, res) {
    const { email, password } = req.query
    const user = users.find((use)=>use.email === email && use.password === password)
    if(user){
        res.status(200).json({"access": true})
    } else { res.status(200).json({"access": false})
    }

}

module.exports = login