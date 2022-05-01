import { Link } from "react-router-dom";
import "./Navbar.css"

import { CartContext } from "../Context/CartContex";
import { useContext } from "react";
export const Navbar = () => {
    const {cart} =useContext(CartContext)
    const nav = [
        { title: "Women", to: "/women" },
        { title: "Men", to: "/Men" },
        { title: "Kids", to: "/Kids" },
       
    ];

    const right = [
        { title: `cart:${cart}`, to: "/cart" },
        { title: "Login", to: "/Login" },
        { title: "About", to: "/about" },
        { title: "FAQ", to: "/faq" },
        { title: "contact", to: "/contact" },
    ];
    return (
        <>
             
            <div className="parent">

               
                {/* <img className="logo" src="data:image/jpeg;base64,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" /> */}
               
                <Link to='/'>
                    <h1 className="shop">ShoptoGet</h1>
                </Link>

                                <div className="nav">

                                    {nav.map((e, i) => (
                                        <Link key={i} to={e.to}>
                                            <div className="title"> {e.title}</div>

                                        </Link>
                                    ))}
                                    
                                </div>

                <div className="right">
                    {right.map((e, i) => (
                        <Link key={i} to={e.to}>   
                            <div className="right1"> {e.title}</div>
                        </Link>
                    ))}
                </div>

            </div>
        </>
    )
}

