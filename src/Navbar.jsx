import React from "react";
import logo from "./assets/Logo.png";

export const Navbar = ()=>{
    return(
        <nav>
            <img className="logo" src={logo} alt="Logo" />
        </nav>
    )
}
