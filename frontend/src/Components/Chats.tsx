import { useEffect,useState } from "react"
import axios from "axios"

const Chats = ()=>{
    const [allUsers,setAllusers] = useState([]) 
    const [receiver,setReceiver] = useState('')
    const [msg,setMsg] = useState('')   
    const [allMsgs, setAllMsgs] = useState([])
    const [sender,setSender] = useState('')
    const username = localStorage.getItem('username')

    useEffect(()=>{
        const fetchUsers = async() => {
          const allData = await axios.get('http://localhost:3000/allUsers')
          setAllusers(allData.data.data)
 
        }
        fetchUsers()
     },[])
     
     useEffect(()=>{
        if(receiver){
                handleMessagesOnBoard()
        }
     },[receiver])

     const handleMessagesOnBoard = async()=>{
          const msgData = await axios.post('http://localhost:3000/getMsgs',{
                              sender: username,
                              receiver: receiver
                          })
                          setAllMsgs(msgData.data.data)
                        //   console.log(msgData.data)
                          console.log(allMsgs)
     }

     const filteredArr = allUsers.filter(user=> !(user.username === username))

     const date = new Date()
     const hrs = date.getHours()
     const mins = date.getMinutes()
     const dateNum = date.getDate()
     const month = (date.getMonth())+1
     const timeStamp:Number = date.getTime()
     const dateSTR = (dateNum+'/'+month+' '+hrs+':'+mins)
     console.log(dateSTR)

     const handleMsg = async()=>{
        if(receiver === ''){
            alert('please select receiver first')
            return
        }
        if(msg === ''){
            alert(`message can't be empty`)
            return
        }
    
          await axios.post('http://localhost:3000/messages',{
          sender: username,
          receiver: receiver,
          userMsg: msg,
          time: dateSTR,
          timeStamp: timeStamp
        })
    }

    return(
        <>
    <div className="flex">
        <div className="md:w-[25%]  md:h-auto md:flex md:flex-col md:items-center md:justify-start">
        {
            filteredArr.map((item)=>{
                return <div className="md:flex md:justify-evenly md:items-center">
                    <p className="cursor-pointer" onClick={()=>{
                          setReceiver(item.username)
                        //   const msgData = await axios.post('http://localhost:3000/getMsgs',{
                        //       sender: username,
                        //       receiver: receiver
                        //   })
                        //   setAllMsgs(msgData.data.data)
                        //   const ReceiverMsgData = await axios.post('http://localhost:3000/getMsgs',{
                        //       sender: receiver,
                        //       receiver: username
                        //   })
                        //   setReceivedMsgs(ReceiverMsgData.data.data)

                    }}>{item.username}</p>
                </div>
            })
        }
        </div>
          <div className=" md:w-[100%] md:h-[100vh]">
            <div className="md:h-[10%] md:flex shadow-lg md:justify-center md:items-center">
                 <p>{receiver}</p>
            </div>
                 <div className="md:h-[80%] md:flex ">
                 <div className="md:w-[100%] bg-slate-100 overflow-scroll pt-[5px] pb-[20px]">
                 {
                             allMsgs.map((user)=>(
                               (user.sender === username)? (
                                <div className="size-fit pl-5 pr-5 mt-5 mr-5 md:h-[60px] bg-red-100 shadow-lg rounded-md flex flex-col justify-evenly">
                                  <p className="text-md">{user.userMsg}</p>
                                    <p className="text-xs">{user.time}</p>
                                </div>
                              )
                              
                              :
                              (
                                <div className=" flex justify-end">
                                <div className="size-fit shadow-lg pl-5 pr-5 mt-5 mr-5 md:h-[60px] bg-blue-100 rounded-md flex flex-col justify-evenly">
                                  <p className="text-md">{user.userMsg}</p>
                                    <p className="text-xs">{user.time}</p>
                                </div>
                                </div>
                              )
                              
                                
                             ))
                           }
                       </div>
                 </div>
                <div className="md:h-[10%] md:flex md:justify-between">
                 <input onChange={e=>{setMsg(e.target.value)}} className="bg-slate-400 md:w-[100%]" type="text" />
                 <button className="md:w-[100px] md:h-[100%]" onClick={handleMsg}>Send</button>
                 </div>
           </div>
    </div>
        </>
    )
}

export default Chats

