import { useEffect, useState } from "react"
import axios from "axios"

const Home = ()=>{
    const [allUsers,setAllusers] = useState([])
    const[msg,setMsg] = useState('')    
    const [receiver,setReceiver] = useState('')
    const [allMsgs, setAllMsgs] = useState([])

    useEffect(()=>{
       const fetchUsers = async() => {
         const allData = await axios.get('http://localhost:3000/allUsers')
         setAllusers(allData.data.data)
         console.log(allData.data.data)

       }
       fetchUsers()
    },[])

    const username = localStorage.getItem('username')

    const filteredArr = allUsers.filter(user=> !(user.username===username))
    // console.log(filteredArr)

    console.log(username)

const date = new Date
const hrs = date.getHours()
const mins = date.getMinutes()
const dateNum = date.getDate()
const month = (date.getMonth())+1
const dateSTR = (dateNum+'/'+month+' '+hrs+':'+mins)
console.log(dateSTR)

const handleMsg = async()=>{
      await axios.post('http://localhost:3000/messages',{
      sender: username,
      receiver: receiver,
      userMsg: msg,
      time: dateSTR
    })
}

// const handleReceiver = 

    return(
        <>
           <p>{username}</p>
           {
            filteredArr.map((item)=>{
             return(
            <div className="ml-[100px]">
               <p onClick={async()=>{
    setReceiver(item.username)
    const msgData = await axios.post('http://localhost:3000/getMsgs',{
        sender: username,
        receiver: receiver
    })
    // setAllMsgs(msgData.data)
    setAllMsgs(msgData.data.data)
   }} className="cursor-pointer">{item.username}</p>
            </div>
             )
            })
           }
           <div className="ml-[200px] flex-col bg-slate-300 w-[600px] h-[300px] flex justify-evenly items-center">
                 <p>{receiver}</p>
                 <div className="w-[100%] h-[200px] bg-white">
                       <div>
                           {
                              allMsgs.map((item)=>{
                                return <>
                                   <p>{item.userMsg}</p>
                                </>
                              })
                           }
                       </div>
                 </div>
                <div>
                 <input onChange={e=>{setMsg(e.target.value)}} className="bg-slate-400" type="text" />
                 <button onClick={handleMsg}>Send</button>
                 </div>
           </div>
        </>
    )
}

export default Home