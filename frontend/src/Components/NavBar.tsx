import { Link } from "react-router-dom"

const NavBar = ()=>{
    const username = localStorage.getItem('username')
    return(
        <div className="md:h-[100vh] bg-gray-700 text-slate-200 md:flex md:flex-col md:justify-between md:items-center">
        <div className="md:mt-[30px] flex flex-col h-[130px] justify-evenly">
            <Link className="" to='/home'><img src="https://cdn-icons-png.flaticon.com/128/724/724715.png" className="w-[35px] h-[35px] rounded-full " alt="" /></Link>
            <Link to='/profile'><img src="https://cdn-icons-png.flaticon.com/128/1077/1077012.png" className="w-[35px] h-[35px] rounded-full " alt="" /></Link>
        </div>
           <p className="md:mb-[30px] w-[40px] h-[40px] bg-blue-500 text-white flex justify-center items-center rounded-full">{username?.slice(0,1)}</p>
        </div>
    )
}

export default NavBar