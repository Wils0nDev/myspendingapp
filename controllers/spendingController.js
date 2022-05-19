const { Response } = require("express")
const spendingModel  = require('../models/Spending');

const spendingGet = async (req,res = Response) => {

    

}

const spendingPost = async (req,res = Response) =>{
    
    const { name,price,amount } = req.body
    const spe = new spendingModel({
        name,price,amount
    });

    const result = await spe.save()

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