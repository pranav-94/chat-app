import { useEffect,useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Chats = ()=>{
    const [allUsers,setAllusers] = useState([]) 
    const [receiver,setReceiver] = useState('')
    const [msg,setMsg] = useState('')   
    const [allMsgs, setAllMsgs] = useState([])
    const navigate = useNavigate()
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
  <div className="md:w-[25%] md:h-auto md:flex md:flex-col md:items-center md:justify-start bg-gray-800 border-r-2 border-gray-600 ">
  <div className="bg-gray-800 text-slate-300 w-[100%] h-[55px] flex justify-center items-center">

    <p>Users</p>
  </div>
    {filteredArr.map((item) => {
      return (
        <div className="md:flex md:justify-evenly md:items-center w-[80%] mt-2 h-[40px] rounded-md bg-blue-400 text-black">
          <p
            className="cursor-pointer  hover:text-gray-100"
            onClick={() => {
              setReceiver(item.username);
            }}
          >
            {item.username}
          </p>
        </div>
      );
    })}
  </div>
  <div className="md:w-[100%] md:h-[100vh]">
    <div className="md:h-[10%] md:flex shadow-lg md:justify-center md:items-center bg-gray-700 ">
      <p onClick={()=>{
        navigate('/profile',{state:{username:receiver}})
      }} className="text-lg text-slate-300 cursor-pointer">{receiver}</p>
    </div>
    <div className="md:h-[80%] md:flex bg-gray-900">
      <div className="md:w-[100%] bg-gray-800 overflow-scroll pt-[5px] pb-[20px] border-l-2 border-r-2 border-gray-600">
        {allMsgs.map((user) =>
          user.sender === username ? (
            <div className="size-fit pl-5 pr-5 mt-5 mr-5 ml-5 md:h-[60px] bg-sky-400 shadow-md rounded-md flex flex-col justify-evenly ">
              <p className="text-md text-black">{user.userMsg}</p>
              <p className="text-xs text-black">{user.time}</p>
            </div>
          ) : (
            <div className="flex justify-end">
              <div className="size-fit shadow-md pl-5 pr-5 mt-5 mr-5 md:h-[60px] bg-blue-400 rounded-md flex flex-col justify-evenly ">
                <p className="text-md text-black">{user.userMsg}</p>
                <p className="text-xs text-black">{user.time}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
    <div className="md:h-[10%] md:flex md:justify-between bg-gray-700 border-t-2 border-gray-600">
    <input
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        className="bg-gray-700 md:w-[100%] p-2 rounded-l-md text-gray-100 border border-gray-500"
        type="text"
      />
      <button
        className="md:w-[100px] md:h-[100%] bg-blue-400 text-black rounded-r-md hover:bg-gray-600 hover:text-white border-l border-gray-400"
        onClick={handleMsg}
      >
        Send
      </button>

    </div>
  </div>
</div>


        </>
    )
}

export default Chats

