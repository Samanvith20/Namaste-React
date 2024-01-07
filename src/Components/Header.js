import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
const Header=()=>{
   const[buttonname,setbuttonname]=useState("login")
    return(
    <div className="Header">
      <div className="logo">
        <img src={LOGO_URL}/>

      </div>
      <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>contact</li>
            <li>cart</li>
            <button className="btn-name"
           onClick={()=>{
             buttonname ==="login"
             ?setbuttonname("logout")
             :setbuttonname("login")
           }}>{buttonname}</button>
        </ul>

      </div>
    </div>
    )
 }
  export default Header