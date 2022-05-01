import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

import { Display } from "./Design.style"
import { Image } from "./Design.style"
import { Entire } from "./Design.style"
import { CartContext } from "../Context/CartContex"
import { useContext } from "react"
export const Men = () => {
    const {handlevalue} =useContext(CartContext)
    const [mens,Mendata] =useState([{
        img:"",
        Brand:"",
        Type:"",
        Price:"",
    }])

    

    useEffect(() => {
        axios.get("http://localhost:8080/mens").then(({data})=>{
         Mendata(data)
        })
        console.log(mens)
    },[])

    return (
         <Entire className="mendetails">
             {mens.map((e) => {
                 return(
                     
                     <Display className="image">
                   < Image src={e.img}/>
                   <p>{e.Brand}</p>
                   <p>{e.Type}</p>
                   <p>{e.Price}</p>
                   <button onClick={() => {
                       handlevalue(1)
                   }} >Add</button>
                      </Display>


                 )
             })}
         </Entire>
    )
}