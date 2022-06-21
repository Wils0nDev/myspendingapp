const Role = require("../models/Role");
const User = require("../models/Users");
const {ObjectId} = require("mongoose").Types

const roleValidate = async (role = "") => {
  const existRole = await Role.findOne({ role });
  if (!existRole) {
    throw new Error(`El rol ${role} no existe en la BD`);
  }
};

const existEmail = async (email = "") => {
  const existEmail = await User.findOne({ email });
  if (existEmail) {
    throw new Error(`El correo ${email} ya existe en la BD`);
  }
};

const existUser = async (id = "") => {

  if (ObjectId.isValid(id)) {
    const _id = ObjectId(id); 
    const existUser = await User.findById({ _id });
    if (!existUser) {
      throw new Error(`El usuario no existe`);
    }

  } else {   
    throw new Error(`id incorrecto`);
  }
    
  

};

module.exports = {
  roleValidate,
  existEmail,
  existUser,
};
