const { Response } = require("express")
const spendingModel  = require('../models/Spending');

const spendingGet = async (req,res = Response) => {

    

}

const spendingPost = async (req,res = Response) =>{
    
    const { name,price,amount,total } = req.body

    const spe = new spendingModel()

    const totalP  = spe.calculateTotal(price)

   
    const result = await spe.save({
        name,
        price,
        amount,
        total 
    });


    return res.json({
        result
    })


}
const spendingPull = (req,res = Response) => {

}
const spendingDelete = (req,res=Response)=>{

}

module.exports = { 
    spendingGet,
    spendingPost,
    spendingPull,
    spendingDelete
}