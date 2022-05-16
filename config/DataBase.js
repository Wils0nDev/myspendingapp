const mongoose = require('mongoose');


class DataBase {

    constructor(){
        this.connect();
    }

    async connect(){
        try {
            await mongoose.connect('mongodb+srv://wils0n:pYcphwy2MCdcbFJM@myspendingapp.073ab.mongodb.net/test');
            console.log('conexin satisfactoria')
          } catch (error) {
            console.log(error);
          }
    }
}

module.exports = DataBase