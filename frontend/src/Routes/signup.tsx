import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = ()=>{

const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const [firstname, setFirstname] = useState('')
const [lastname,setLastname] = useState('')
const navigate= useNavigate()

const handleSign = async()=>{
        if(username === '' || password === '' || firstname === '' || lastname === ''){
            alert('please fill all fields')
            return
        }
           const data = await axios.post('http://localhost:3000/signup',{
               username: username,
               password: password,
               firstname: firstname,
               lastname: lastname
           })
           if(data.data.msg){
            localStorage.setItem('username',username)
            navigate('/Home')
           }
        }

    return(
        <>
        <input type="text" onChange={e=>{setUsername(e.target.value)}} placeholder="username"/>
        <input type="text" onChange={e=>{setPassword(e.target.value)}} placeholder="password"/>
        <input type="text" onChange={e=>{setFirstname(e.target.value)}} placeholder="firstname"/>
        <input type="text" onChange={e=>{setLastname(e.target.value)}} placeholder="lastname"/>

        <button onClick={handleSign}>Sign Up</button>

        <p>Already have account? <a href="/signIn">sign in</a></p>
        </>
    )
}

export default SignUp