const router=require('express').Router();

const users=require('../users.json')

const jwt=require('jsonwebtoken')

router.post('/loginpage',(req,res)=>{
    const user=users.find((usr)=>usr.username===req.body.username)
    if(user){
        if(user.password===req.body.password){
            //creating the secret code
            const token=jwt.sign({password:user.password},"privatekey")
            res.status(200).send({token:token})
            console.log("JWT TOKEN=>   "+token);
        }
        else{
            res.status(401).send('Access denied. Give the correct field')
        }
    }
    else{
        res.status(401).send('Access denied. User not found')
    }
})

module.exports=router;