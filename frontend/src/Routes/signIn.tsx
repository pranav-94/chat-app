import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SignIn = ()=>{
    return(
        <>
        <HandleSign/>
        </>
    )
}

const HandleSign = ()=>{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignIn = async()=>{
        if(username === '' || password === '' ){
            alert('please fill all fields')
            return
        }
           const data = await axios.post('http://localhost:3000/signin',{
               username: username,
               password: password
           })
           if(data.data.msg){
            localStorage.setItem('username',)
            navigate('/Home')
           }
        }

    return(
        <>
        <input type="text" onChange={e=>{setUsername(e.target.value)}} placeholder="username"/>
        <input type="text" onChange={e=>{setPassword(e.target.value)}} placeholder="password"/>

        <button onClick={handleSignIn}>Sign In</button>

        <p>don't have an account? <a href="/">sign up</a></p>

        </>
    )
}

export default SignIn