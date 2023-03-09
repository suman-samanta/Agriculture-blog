import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './sidebar.css';

const Sidebar=()=>{
   const [cats,setCats]=useState([]);

   useEffect(()=>{
    const getCats= async()=>{
        const res=await axios.get("http://localhost:5000/api/categories")
        setCats(res.data);
    }

    getCats();

   },[])

   return(
       <>
           <div className="sidebar">
             <div className="sidebaritem">
              <span className="sidebarTitle"> ABOUT US</span>
              <img className="sidebarImg" src="/img/group.jpg" alt=" " />
              <p>We are the Gangs Of Csepur.</p>
             </div>
             <div className="sidebaritem">
              <span className="sidebarTitle"> CATEGORIES</span>
              <ul className="sidebarList">
                 {cats.map((c)=>(
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>             
                 ))}                 
              </ul>
             </div>
             <div className="sidebaritem">
              <span className="sidebarTitle"> FOLLOW US</span>
              <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i> 
              </div>
              </div>
           </div>
       </>
   );
}

export default Sidebar;