import axios from "axios"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { useParams,Navigate} from "react-router"
 import { AuthContext } from "../Context/AuthContext"

export const UserDetails=()=> {

    const {id}=useParams()      //useParams will give object
    const [mens,Mendata] =useState({})
    const {isAuth} = useContext(AuthContext)

    useEffect(() => {
        axios.get(`http://localhost:8080/mens/${id}`).then(({data})=> {
            Mendata(data)
        })
    },[])
    console.log(id)
    if(!isAuth)
    {
 return <Navigate to ={"/login"}></Navigate>    ////line19 if user is not logined take him to login page itself
    }
    return(
        <>
        <div>User ID:{id}</div>
        <img src={mens.img}/>
        <div>  {mens.Type}</div>
        <div> {mens.Brand}</div>
        <div>{mens.Price}</div>
        </>
    )
}
