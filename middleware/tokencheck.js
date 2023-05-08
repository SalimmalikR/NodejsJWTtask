//token authorization
const jwt=require('jsonwebtoken')

module.exports= function tokencheck(req,res,next){
    const token=req.headers["authorization"];
    if(token){
        jwt.verify(token,"privatekey", (err, decoded)=>{
            if(err){
                res.status(401).send('Access denied=> wrong token');
                return;
            }
            else{
                req.password=decoded.password;
                next();
            }
        })
    }
    else{
        res.status(401).send('Access denied!');
    }
}
