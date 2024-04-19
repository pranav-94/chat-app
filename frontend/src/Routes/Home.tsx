// import { useEffect, useState } from "react"
// import axios from "axios"
import Chats from "../Components/Chats"
import NavBar from "../Components/NavBar"

const Home = ()=>{
      return(
        <div className="md:w-[100%] flex">
            <div className="md:w-[10%]">
                <NavBar/>
            </div>
          <div className="md:w-[90%] ">
            <Chats />
          </div>
        </div>
      )
}
export default Home