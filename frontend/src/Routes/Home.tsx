// import { useEffect, useState } from "react"
// import axios from "axios"
import { useState } from "react"
import Chats from "../Components/Chats"
import NavBar from "../Components/NavBar"

const Home = ()=>{
  const [mode,setMode] = useState(true)
  const handleMode = ()=>{
    setMode(!mode)
  }
  return(
  <>
    {
      mode===true?
    <div className="md:w-[100%] flex">
        <div className="md:w-[5%]">
            <NavBar/>
        </div>
      <div className="md:w-[95%]">
        <Chats />
      </div>
    </div>
    :
    <div className="md:w-[100%] flex bg-slate-500">
      <button onClick={handleMode}>Mode</button>
        <div className="md:w-[10%]">
            <NavBar/>
        </div>
      <div className="md:w-[90%]">
        <Chats />
      </div>
    </div>
    }
    </>
  )
}
export default Home