import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Header=()=>{
   const[buttonname,setbuttonname]=useState("login")
   const onlineStatus = useOnlineStatus();
    return(
    <div className="Header">
      <div className="logo">
        <img src={LOGO_URL}/>

      </div>
      <div className="nav-items">
        <ul>
        <li className="online">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li> <Link to ="/grocery"> Grocery</Link></li>
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