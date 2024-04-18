import express,{Request,Response} from 'express'
import db from './db'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())

app.post('/signup',async(req:Request,res:Response)=>{
     const signupData = req.body 
     const Data = await db.userModel.create({
        username: signupData.username,
        password: signupData.password,
        firstname: signupData.firstname,
        lastname: signupData.lastname
     })
     res.json({
        msg: 'success',
        data: Data
     })
})

app.get('/allUsers',async(req:Request,res:Response)=>{
    const allUserData = await db.userModel.find()
    res.status(200).json({
        msg: 'success',
        data: allUserData
    })
})

app.post('/messages',async(req:Request,res:Response)=>{
    console.log(req.body)
     await db.messageModel.create({
        sender: req.body.sender,
        receiver: req.body.receiver,
        userMsg: req.body.userMsg,
        time: req.body.time
     })
})

app.post('/getMsgs',async(req:Request,res:Response)=>{
   const userMsgs = await db.messageModel.find({
         sender: req.body.sender ,
         receiver: req.body.receiver 
      })

      res.json({
         msg: 'success',
         data: userMsgs
      })
})

app.post('/signIn',async(req:Request,res:Response)=>{
   const signInData = req.body 

   const signInStatus = await db.userModel.find({
      username: signInData.username,
      password: signInData.password
   })

   if(signInStatus.length !==1){
      res.status(403).json({
         status: "wrong inputs"
      })
      return
   }

   res.status(200).json({
      msg: 'success'
   })


})

app.listen(3000)