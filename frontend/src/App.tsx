import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import SignUp from "./Routes/signup"
import Home from "./Routes/Home"
import SignIn from "./Routes/signIn"

const app = ()=>{
  return(
    <>
       <Router>
        <Routes>
        <Route path="/" Component={SignUp}/>
        <Route path='/home' Component={Home} />
        <Route path='/signIn' Component={SignIn}/>
        </Routes>
       </Router>
    </>
  )
}

export default app