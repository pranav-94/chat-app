import express,{Request,Response} from 'express'
import jwt from 'jsonwebtoken'
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
        time: req.body.time,
        timeStamp: req.body.timeStamp
     })
})

app.post('/getMsgs',async(req:Request,res:Response)=>{

   const senderMsgs = await db.messageModel.find({
         sender: req.body.sender ,
         receiver: req.body.receiver 
      })

   const receiverMsgs = await db.messageModel.find({
         sender: req.body.receiver ,
         receiver: req.body.sender 
      })

   const allMsgs = [...senderMsgs,...receiverMsgs]
   allMsgs.sort((a, b) => {
      return a.timeStamp - b.timeStamp
});

      res.json({
         msg: 'success',
         data: allMsgs
      })
})

app.post('/signIn',async(req:Request,res:Response)=>{
   const signInData = req.body 

   // const user = {name:signInData.username}
   // const jwt_auth = jwt

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