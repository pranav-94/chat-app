import { Link } from "react-router-dom"

const NavBar = ()=>{
    const username = localStorage.getItem('username')
    return(
        <div className="md:h-[100vh] bg-slate-100 md:flex md:flex-col md:justify-between md:items-center">
        <div className="md:mt-[30px] flex flex-col">
            <Link to='/home'>contacts</Link>
            <Link to='/profile'>profile</Link>
        </div>
           <p className="md:mb-[30px]">{username}</p>
        </div>
    )
}

export default NavBar