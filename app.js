//Express-js
const express= require('express')

const app=express()

//json format data's
app.use(express.json())


//post and get routers 
//1.post
const postrouter=require('./router/post')
app.use(postrouter)

//2.Get
const getrouter=require('./router/get')
app.use(getrouter)

//port
app.listen(3000)
console.log('port 9000 is running.....');