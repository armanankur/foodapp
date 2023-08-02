import React from "react"
import Styled from "./Navbar.module.css"
import logo from "./logo.jpg"
import { FaUserAlt } from 'react-icons/fa';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
const Navbar=()=> {

    return(
        <nav className={Styled.container}>

         <div className={Styled.leftContainer}>

         <div className={Styled.logo}>
            <img src={logo} alt="not found" />

           </div>

           <div  className={Styled.name}>
            <h1>ADHARSH FOOD PRODUCTS</h1>
           </div>
         </div>

           <div className={Styled.rightContainer}>
          
          <div className={Styled.userImg}>
         <span>< FaUserAlt/> </span> 
          </div>
          <div className={Styled.downArrow}>
         <span> <MdOutlineKeyboardArrowDown/> </span>

          </div>
           </div>
        </nav>
    )
}
export default Navbar