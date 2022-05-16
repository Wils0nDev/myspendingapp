

const Server = require('./config/Server');
const server = new Server();

server.listen();

// const express = require('express')
// const mongoose = require('mongoose');
// const {Schema} = mongoose


// app.get('/user/:id', async (req, res) => {

//     console.log(req.params)
//     const MyModel = m.model('Test', new Schema({ name: String }));

//     const user = await MyModel.create(
//             { 
//                 name: 'Wilson Vasquez Coronado'
//             }
//         );

//     return res.json(user)

//   })
  
// ///
