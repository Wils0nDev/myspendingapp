const express = require('express')
const Mongo = require('./DataBase')
const SpendingRouter = require('../routers/spendingRouter')

class Server  {

    constructor(){
        this.app = express();
        this.port = 4200
        this.bd = new Mongo();
        this.sp = new SpendingRouter()
        //this.connect()
    }

    listen(){
        this.app.listen(this.port, () => {
                console.log(`Servidor conectado en el puerto: ${this.port}`)
        })
    }  

    routes(){

    }


    

}

module.exports = Server
