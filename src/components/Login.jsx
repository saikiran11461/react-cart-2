import { useContext, useState } from "react"
//import { Badge } from "react-bootstrap"
 
import { useNavigate } from "react-router"
 import { AuthContext } from "../Context/AuthContext"
export const Login = () => {
    const {handleAuth} =useContext(AuthContext)
    const[text,seText] =useState({
        name:"",
        password:"",
    })
      const [arr,setArr] =useState([])
      const [bag,setBag] =useState([])
    const handle =(e) =>
 {
     const {id,value}= e.target
      
        seText({...text,
            [id] :value
           })
     if(e.target.id=="name"){
         setArr(...arr,e.target.value)
     }
     else if(e.target.id=="password")
     {
         setBag(...bag,e.target)
     }
    console.log(arr,bag)
 }  


 const navigate=useNavigate()

     
    return (
        <div>
            <input onChange={handle}   type="text" placeholder="username" id="name" />
            <input onChange={handle}  type="text" placeholder="password" id="password" />
             <button  onClick={() => {

                 handleAuth(true)
                 
                 navigate("/")
             }}>SUBMIT</button>

        </div>
    )
}