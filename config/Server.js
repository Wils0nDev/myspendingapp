const express = require('express')
//const Mongo = require('./DataBase')
const DataBaseSql = require('./DataBaseSql')

const cors = require('cors')
const endpoint = require('../path/endpoints')
class Server  {

    constructor(){

        this.app = express();
        this.connection();
        this.port = 4200
        this.endpoint = endpoint
        this.middleware();
        this.routes();
    }


    listen(){
        this.app.listen(this.port, () => {
                console.log(`Servidor conectado en el puerto: ${this.port}`)
        })
    }  

    async connection(){
        await new DataBaseSql();
    }

    middleware(){
        
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

    }

    

    routes(){

        this.app.use(this.endpoint.user,require('../routers/userRouter'))
        this.app.use(this.endpoint.spending,require('../routers/spendingRouter'))


    }


    

}

module.exports = Server
