const bcryptjs = require("bcryptjs")
const BcrypConf = require("../utils/Constant")

const bcrypPassword = (password)=> {

    //encriptar usuario
    const saltRount = BcrypConf.saltRounds
    
    return bcryptjs.hashSync(password,saltRount)
}

module.exports = bcrypPassword