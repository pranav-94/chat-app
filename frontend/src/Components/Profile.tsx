import { useLocation } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"

const ProfileComp = ()=>{

    const location = useLocation()
    const username = localStorage.getItem('username')

    useEffect(()=>{
      const status = async()=>{
      const res = await axios.get('http://localhost:3000/userStatus')
      console.log(res)
      }
      status()
    },[])

    return(
<div className="md:w-[100%] md:h-screen md:flex md:flex-col bg-gray-800 border-r-2 border-gray-600">
  <div className="bg-slate-700 text-slate-300 w-[100%] h-[10%] flex justify-center items-center">
    <p>Profile</p>
  </div>
  <div className="md:flex md:flex-row md:justify-around md:items-start w-[100%] h-screen mt-4 p-4 bg-gray-800 text-slate-300">
  <div className="flex flex-col items-center justify-evenly h-[450px] w-[500px] bg-slate-700 text-gray-800 p-4 rounded-lg shadow-lg">
  <img
    src={'userProfilePicUrl'}
    alt="Profile Pic"
    className="w-[100px] h-[100px] rounded-full border-4 border-sky-500 shadow-lg"
  />
  {
    (location.state.username === username) ?   <p className="mt-4 text-xl font-semibold text-sky-600">{username}</p> :
  <p className="mt-4 text-xl font-semibold text-sky-600">{location.state.username}</p>
}
  {/* <p className="text-md text-gray-600 italic">{'userBio'}</p> */}
  
  <div className="flex flex-col justify-evenly items-center mt-4 w-full">
    <div className="flex flex-col justify-between w-full px-4">
      <div className="flex flex-col items-center">
        <p className="text-sm text-gray-400">Status:</p>
        {
          navigator.onLine ?<p className="text-md font-semibold text-green-400">online</p>          :
        <p className="text-md font-semibold text-green-400">offline</p>
}
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm text-gray-400">Messages:</p>
        <p className="text-md font-semibold">{'totalMessages'}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-sm text-gray-400">Last Active:</p>
        <p className="text-md font-semibold">{'lastActive'}</p>
      </div>
    </div>
  </div>

{
  (location.state.username === username) ? <></> :
  <button className="w-full mt-auto p-2 bg-blue-500 text-white rounded-md hover:bg-sky-700">
    Send Message
  </button>
}
</div>

    {/* <div className="flex-1 bg-gray-800 p-4 rounded-md shadow-md ml-4">
      <div className="mb-4">
        <p className="text-md">Email: {'userEmail'}</p>
        <p className="text-md">Joined: {'userJoinDate'}</p>
      </div>
      <div className="mb-4">
        <p className="text-md">Location: {'userLocation'}</p>
        <p className="text-md">Website: {'userWebsite'}</p>
      </div>
      <div className="mb-4">
        <p className="text-md">Interests:</p>
        <ul className="list-disc list-inside text-slate-300">
          {/* {'userInterests'.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))} */}
        {/* </ul>
      </div>
    </div> */} 
  </div>
</div>


    )
}

export default ProfileComp