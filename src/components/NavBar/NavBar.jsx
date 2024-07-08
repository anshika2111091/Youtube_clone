import "./navbar.css";
import { IoIosMenu, IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { RiVideoAddFill } from "react-icons/ri";
import profile_icon from "../../assets/1.jpeg";
import logo from "../../assets/youtube.jpeg";


const NavBar = ({sideview,setsideview}) => {
  return (
    <nav className="flex-div">
        <div className="nav-left flex-div">
            <IoIosMenu onClick={()=>setsideview(!sideview)} className="menu-icon"/>
            <img className="logo" src={logo} alt="" />
        </div>
        <div className="nav-middle flex-div">
          <input type="text" className="searchbox"  placeholder="Search"/>
        <FaSearch className="search-icon"/>
        </div>
        <div className="nav-right flex-div"> 
           <RiVideoAddFill className="icon" style={{color:"red"}}/>
          <HiMiniSquares2X2 className="icon"/>
            <IoIosNotifications className="icon"/>
            <img src={profile_icon} className="user-icon" alt="" />

        </div>
      
    </nav>
  )
}

export default NavBar
