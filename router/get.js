const router=require('express').Router();

const tokencheck=require('../middleware/tokencheck')

router.get('/homepage', tokencheck,(req,res)=>{
    res.status(200).send('Welcome to the home page')
})

module.exports=router;