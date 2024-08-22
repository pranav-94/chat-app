import { Link } from "react-router-dom"

const NavBar = ()=>{
    const username = localStorage.getItem('username')
    return(
        <div className="md:h-[100vh] bg-gray-700 text-slate-200 md:flex md:flex-col md:justify-between md:items-center">
        <div className="md:mt-[30px] flex flex-col h-[130px] justify-evenly">
            <Link className="" to='/home'><img src="https://as1.ftcdn.net/v2/jpg/01/98/91/56/1000_F_198915640_AgwO0OXCLmIzJhICxVGM8qhp0aDBFqdF.jpg" className="w-[35px] h-[35px] rounded-full " alt="" /></Link>
            <Link to='/profile'><img src="https://as1.ftcdn.net/v2/jpg/02/09/95/42/1000_F_209954204_mHCvAQBIXP7C2zRl5Fbs6MEWOEkaX3cA.jpg" className="w-[35px] h-[35px] rounded-full " alt="" /></Link>
        </div>
           <p className="md:mb-[30px]">{username}</p>
        </div>
    )
}

export default NavBar