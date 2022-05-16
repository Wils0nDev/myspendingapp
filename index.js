
const express = require('express')
const mongoose = require('mongoose');
const {Schema} = mongoose


const app = express()
const port = 4200

//levanto el servidor

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//// conexion con BD 
const m = new mongoose.Mongoose()
const handleError = (error) =>{
    console.log(error)
}

const connection = async () =>{
    try {
        await m.connect('mongodb+srv://wils0n:pYcphwy2MCdcbFJM@myspendingapp.073ab.mongodb.net/test')
        console.log('conectado')
      } catch (error) {
        handleError(error);
      }
}

connection()

app.get('/user/:id', async (req, res) => {

    console.log(req.params)
    const MyModel = m.model('Test', new Schema({ name: String }));

    const user = await MyModel.create(
            { 
                name: 'Wilson Vasquez Coronado'
            }
        );

    return res.json(user)

  })
  
///
