const { Router } = require("express");
const {
    spendingGet,
    spendingPost,
    spendingPull,
    spendingDelete
} = require("../controllers/spendingController")


const router = Router();


 router.get('/list',[],spendingGet)
 router.post('/add',[],spendingPost)
 router.put('/update/:id',[],spendingPull)
 router.delete('/delet/:id',[],spendingDelete)



module.exports = router