import NavBar from "../Components/NavBar"
import ProfileComp from "../Components/Profile"

const ProfilePage = ()=>{

    return(
        <>
        <div className="md:w-[100%] flex">
            <div className="md:w-[5%]">
                <NavBar/>
            </div>
          <div className="md:w-[95%] ">
            <ProfileComp />
          </div>
        </div>
        </>
    )
}

export default ProfilePage