const { Router } = require("express");
const spendingGet = require("../controllers/spendingController")


const router = Router();


 router.get('/',[],spendingGet)



module.exports = router