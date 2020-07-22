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
const posts = [
    {id: 0, title:'firstPost',body:'hey this is the first post okkay '},
    {id: 1, title:'I like jwt',body:'yes I do like it it is intuitiuve to me '},
    {id: 2, title:'this is fire',body:'amazing workflow '},
    {id: 3, title:'the first guuy !! ',body:'he was the first guy to recognize the importance of howhow '},
    {id: 4, title:'hola amigo',body:'hola como estan soy said desde maroucos y me encatna la lingua espanol '},
]

app.post('/login',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    //here ofcourse we dont just check for password using a straigh comparason but rather hash it and all the jazz 
    const user =users.filter(user=>user.username == username && user.password == password)[0]
    if(user != undefined){
        jwt.sign({user},'secretKey',{expiresIn:'10h'},(err,token)=>res.json({token}))
    }else
       res.sendStatus(400)
})
const verifyToken = (req,res,next)=>{
    const bearerHeader = req.headers['authorization']
    if( bearerHeader  !== 'undefined'){
       const token = bearerHeader.split(' ')[1]
       req.token=token
       next()
    }else
    {
       res.sendStatus(403)
    }
}

app.post('/posts/create',verifyToken,(req,res)=>{
   jwt.verify(req.token,'secretKey',(err,authDATA)=>{
          if(err)res.sendStatus(403)
          else
          {
              const title= req.body.title
              const body= req.body.body
              posts.push({id:posts.length,title:title,body:body})
              res.json({msg:'created',authDATA})
          }
   })
})
app.get('/posts',(req,res)=>{
   res.json({posts})
})
app.get('/posts/:id',verifyToken,(req,res)=>{
    res.json({post:posts.filter(post=>post.id != req.params.id)})
})




app.listen(4000,()=>{console.log('listening on port 4000')})