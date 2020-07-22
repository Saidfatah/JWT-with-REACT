const express= require('express')
const app = express()
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
 
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



const accounts = [
    {
        id:0 , 
        username:"saidfatah",
        password:"123456"
    },
    {
        id:1 , 
        username:"alig",
        password:"123456"
    },
    {
        id:2 , 
        username:"moadBOO",
        password:"123456"
    },
    {
        id:3 , 
        username:"hemzaZa",
        password:"123456"
    }
]

app.post('/login',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    console.log({username,password})
    res.send('worked')
})

app.listen(4000,()=>{console.log('listening on port 4000')})