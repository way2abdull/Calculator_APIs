//const express = require ('Express')
import express from 'express';
const router = express.Router();

 router.post('/add',(req,res)=>{
    let nums = req.body.nums;
        let sum = 0;
        for(let i = 0; i <nums.length; i++){
            
            sum = sum + nums[i];
        }
    
    res.send(`sum is ${sum}`);
})

router.post('/multiply',(req,res)=>{
    let nums = req.body.nums;
        let mult = 1;
        for(let i = 0; i <nums.length; i++){
            
            mult = mult * nums[i];
        }
    
    res.send(`mult is ${mult}`);
})


export default router;

// module.exports = router;