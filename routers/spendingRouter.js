const { Router } = require("express");
const SpendingController = require("../controllers/spendingController")

class spendingRouter {

    constructor(){
        //this.router = Router();
        this.spendingC = new SpendingController();
        this.postSpending();
    }

    postSpending(){

         this.spendingC.postSpending();


       // this.router.post

    }

}

module.exports = spendingRouter