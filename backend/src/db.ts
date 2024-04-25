import mongoose from 'mongoose'
mongoose.connect('mongodb://localhost:27017/chatApp_v1')

const userSchema = new mongoose.Schema({
      username: String,
      password: String,
      firstname: String,
      lastname: String
})

interface Messages  {
     timeStamp :number
}

const messageSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    userMsg: String,
    time: String,
    timeStamp: Number
})

const userModel = mongoose.model('userData',userSchema)
const messageModel = mongoose.model<Messages>('messageData',messageSchema)

export default {userModel,messageModel}