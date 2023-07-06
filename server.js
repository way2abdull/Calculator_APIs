//  const express = require('express');
import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());

import router from './routes/sumRouter.js';

app.use(router);

// app.post('/add', (req,res) => {             //Accepting 'n' number of inputs from user.
//     let nums = req.body.nums;
//         let sum = 0;
//         for(let i = 0; i <nums.length; i++){
            
//             sum = sum + nums[i];
//         }
    
//     res.send(`sum is ${sum}`);
// })

// app.post('/subtract', (req , res) => {
//     let sub = (req.body.a) - (req.body.b);
//     res.send(`${sub}`);

// })

// app.post('/multiply', (req , res) => {

//     let nums = req.body.nums;
//         let sum = 1;
//         for(let i = 0; i <nums.length; i++){
            
//             sum = sum * nums[i];
//         }
    
//     res.send(`multiply is ${sum}`);


//     // let mult = (req.body.a) * (req.body.b);
//     // res.send(`${mult}`);

// })

// app.post('/divide' , (req , res) => {
//     let divide = req.body.a / req.body.b;
//     res.send(`division of ${req.body.a} and ${req.body.b} is:  ${divide}`);

// })

// app.post('/exponential' , (req , res) => {
//     exponent = req.body.a ** req.body.b;
//     res.send(`Result of ${req.body.a} ^ ${req.body.b} = ${exponent}`);

// })

// app.post('/log', (req,res) => {
//     let a =(req.body.a);
//     log = Math.log(a);
//     res.send(`Log of ${a} is :  ${log}`);
// })


app.listen(port, () => {
    console.log("Server running on port 3000")
});

