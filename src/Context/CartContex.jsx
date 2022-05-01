import { createContext, useState } from "react";



export const CartContext=createContext();

export const CartContextProvider=({children})=>{
    const [cart,setValue]=useState(0);
    
    const handlevalue=(val)=>{
        setValue(cart+val)
    }
    return(
        <CartContext.Provider value={{cart,handlevalue}}>{children}</CartContext.Provider>

    )
}