import { LOGO_URL } from "../utils/constants"
const Header=()=>{
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
        </ul>

      </div>
    </div>
    )
 }
  export default Header