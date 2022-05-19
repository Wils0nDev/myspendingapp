const express = require('express')
const Mongo = require('./DataBase')

class Server  {

    constructor(){
        this.app = express();
        this.port = 4200
        this.bd = new Mongo();
        this.routes();
    }

    listen(){
        this.app.listen(this.port, () => {
                console.log(`Servidor conectado en el puerto: ${this.port}`)
        })
    }  

    routes(){

        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
        this.app.use('/api/spending',require('../routers/spendingRouter'))

    }


    

}

module.exports = Server
