import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Content from "../../components/Content/Content";
import {useState} from "react";

const Home = () => {
  const [sideview,setsideview]=useState(true);
  return (
    <div>
      <NavBar sideview={sideview} setsideview={setsideview}/>
      <div className="main">
      <SideBar sideview={sideview} />
      <Content/>
      </div>
    </div>
  )
}

export default Home
