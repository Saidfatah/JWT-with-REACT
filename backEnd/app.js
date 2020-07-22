const express= require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
var cors = require('cors')
 
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



const users = [
    {
        id:0 , 
        username:"saidfatah",
        password:"123456",
        rule:'admin'
    },
    {
        id:1 , 
        username:"alig",
        password:"123456",
        rule:'normal'

    },
    {
        id:2 , 
        username:"moadBOO",
        password:"123456",
        rule:'normal'

    },
    {
        id:3 , 
        username:"hemzaZa",
        password:"123456",
        rule:'normal'

    }
]

app.post('/login',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    //here ofcourse we dont just check for password using a straigh comparason but rather hash it and all the jazz 
    const user =users.filter(user=>user.username == username && user.password == password)[0]
    if(user != undefined){
        console.log('user found')
        jwt.sign({user},'secretKey',(err,token)=>res.json({token}))
    }else
       res.sendStatus(400)
})

app.post('/posts/create',verifyToken,(req,res)=>{
   res.json({msg:'post created'})
})


const verifyToken = (req,res,next)=>{
     const bearerHeader = req.headers['authorization']
     if( typepf(bearerHeader) !== 'undefined'){
        const token = bearerHeader.split(' ')[1]
        req.token=token
        next()
     }else
     {
        res.sendStatus(403)
     }
}

app.listen(4000,()=>{console.log('listening on port 4000')})