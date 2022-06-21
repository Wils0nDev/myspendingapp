const User = require("../models/Users")
const { Response } = require("express")
const bcrypPassword = require("../utils/Bcryp")



const userGet = (req,res) => {
    
    

}

const userPost = async (req,res = Response) => {

 

    const { name,lastName,email,password,img,role } = req.body
    const user = new User({ name,lastName,email,password,img, role });

   
    //verificar si existe correo 
    const existEmail = await User.findOne({email})

    if(existEmail) {
        return res.status(400).json({
            msg: 'Email ya existe'
        })
    }

    //encriptar usuario
    const passBcrypt = bcrypPassword(password)
    user.password = passBcrypt

    //guardamos
    await user.save()

    return res.json(
        {
            user,
            msg : 'usuario registrado correctamente'
        }
    )
}



const userPut = async (req,res) => {
    const { id } = req.params
    const { _id, password,google,...resto } = req.body
    if(password){
        const passBcrypt = bcrypPassword(password)
        resto.password = passBcrypt
    }
    const options = { new: true }; 
    const userUpdate = await User.findByIdAndUpdate({_id:id},resto, options )

    return res.json(
        {
            userUpdate,
            msg : 'usuario actualizado correctamente'
        }
    )
    //buscar si existe el usuario -- aqui ya usamos el middleware
    
   //  const { name,lastName,email,password,img,role } = req.body


}

const userDelete = async (req,res) => {

    const { id } = req.params
    
    const userDelete = await User.findByIdAndDelete({_id:id})

    return res.json(
        {
            userDelete,
            msg : 'usuario eliminado correctamente'
        }
    )

}


module.exports = { 
    userGet,
    userPost,
    userPut,
    userDelete
 }