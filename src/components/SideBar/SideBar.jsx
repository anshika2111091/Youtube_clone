import "./sidebar.css";
import { FaHome,FaCarSide, FaBlogger} from "react-icons/fa";
import { IoGameController, IoNewspaperSharp } from "react-icons/io5";
import { MdSportsBaseball, MdLibraryMusic } from "react-icons/md";
import { PiTelevisionSimple } from "react-icons/pi";
import { GrTechnology } from "react-icons/gr";
import p1 from "../../assets/1.jpeg";
import p2 from "../../assets/2.jpeg";
import p3 from "../../assets/4.jpeg";
import p4 from "../../assets/8.jpeg";
import p5 from "../../assets/10.jpeg";
import { useState,useEffect } from "react";

const SideBar = ({sideview}) => {

    const [classs,setclasss]=useState("sidebardesc");
    useEffect(()=>{
       if(sideview)
        setclasss({classs});
    else
    setclasss("desc");
            
    },[sideview]);


  return (
    <div className="side">
        <ul className="sidebar">
            <li className="sidebarItem">
                <FaHome className="sidebaricon"/>
                <p className={classs}>Home</p>
              
            </li>
            <li className="sidebarItem">
                <IoGameController className="sidebaricon"/>
                <p className={classs}>Gaming</p>
              
            </li>
            <li className="sidebarItem">
                <FaCarSide className="sidebaricon"/>
                <p className={classs}>Automobiles</p>
              
            </li>
            <li className="sidebarItem">
                <MdSportsBaseball className="sidebaricon"/>
                <p className={classs}>Sports</p>
              
            </li>
            <li className="sidebarItem">
                <PiTelevisionSimple className="sidebaricon"/>
                <p className={classs}>Entertainment</p>
              
            </li>
            <li className="sidebarItem">
                <GrTechnology className="sidebaricon"/>
                <p className={classs}>Technology</p>
              
            </li>
            <li className="sidebarItem">
                <MdLibraryMusic className="sidebaricon"/>
                <p className={classs}>Music</p>
              
            </li>
            <li className="sidebarItem">
                <FaBlogger className="sidebaricon"/>
                <p className={classs}>Blogs</p>
              
            </li>
            <li className="sidebarItem">
                <IoNewspaperSharp className="sidebaricon"/>
                <p className={classs}>News</p>
              
            </li>
        
        </ul>
        <hr />
        <div className="subscriber"  style={sideview ? {width:"220px"} :{width:"40px"}}>
            <h4 className={classs}>SUBSCRIBED</h4>
            <ul className="subs">
                <li className="subitem">
                <img className="subimg" src={p1}  alt="" />
                    <p className={classs}>PewDiePie</p>
                </li>
                <li className="subitem">
                <img className="subimg" src={p2}  alt="" />
                    <p className={classs}>MrBeast</p>
                </li>
                <li className="subitem">
                <img className="subimg" src={p3}  alt="" />
                    <p className={classs}>Justin Bieber</p>
                </li>
                <li className="subitem">
                <img className="subimg" src={p4}  alt="" />
                    <p className={classs}>5-mins Craft</p>
                </li>
                <li className="subitem">
                <img className="subimg" src={p5}  alt="" />
                    <p className={classs}>Arjit Singh</p>
                </li>
                <li className="subitem">
                <img className="subimg" src={p1}  alt="" />
                    <p className={classs}>Henrry</p>
                </li>
                <li className="subitem">
                <img className="subimg" src={p2}  alt="" />
                    <p className={classs}>Petter Parker</p>
                </li>
                <li className="subitem">
                <img className="subimg" src={p3}  alt="" />
                    <p className={classs}>Narendra Modi</p>
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default SideBar
