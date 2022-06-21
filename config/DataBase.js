const mongoose = require('mongoose');
require('dotenv').config()


class DataBase {

    constructor(){
        this.connect();
    }

    async connect(){
        try {
            await mongoose.connect(process.env.MONGODB_CNN,
            {
              useNewUrlParser :true,
              useUnifiedTopology :true
            });
            console.log('conexin satisfactoria')
          } catch (error) {
            console.log(error);
          }
    }
}

module.exports = DataBase