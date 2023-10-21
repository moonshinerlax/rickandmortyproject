const {User} = require("../DB_connection")

const postUser = async (req, res)=>{
    const {email, password} = req.body

    try {
        if(email && password){
            if(!/^[a-zA-Z0-9._%+-]{1,32}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
                return res.status(400).json({error: "Email Invalido"})
            }
            if (!/^(?=.*[0-9])(?=.{6,10})/.test(password)){
                return res.status(400).json({error: "Contraseña debe tener al menos 1 número y longitud entre 6 y 10 caracteres"})
            }
            const checkDuplicate = await User.findOne(
                {where: {email}}
            )
            if(checkDuplicate){
                return res.status(400).json({error:"El Usuario ya Existe"})}
           
           const { newUser } = await User.findOrCreate({
                where: {email, password},
            })
                return res.status(200).json(newUser)
        }
        return res.status(400).json({error: "Faltan Datos"})            
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = postUser;