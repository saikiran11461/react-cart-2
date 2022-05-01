import axios from "axios"
import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { CartContext } from "../Context/CartContex"

import { Display } from "./Design.style"
import { Image } from "./Design.style"
import { Entire } from "./Design.style"
export const Women = () => {
    const {handlevalue} =useContext(CartContext)
    const [womens,Womendata] =useState([{
        img:"",
        Brand:"",
        Type:"",
        Price:"",
    }])

    

    useEffect(() => {
        axios.get("http://localhost:8080/Womens").then(({data})=>{
         Womendata(data)
        })
        console.log(womens)
    },[])

    return (
         <Entire className="mendetails">
             {womens.map((e) => {
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