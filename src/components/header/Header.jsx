import React from "react";
import './header.css'

const Header=()=>{
    return (
        <>
            <div className="header">
              <div className="headerTitles">
                <span className="headerTitleSm"> Agriculture & Fertilizer </span>
                <span className="headerTitleLg"> Blog</span>
              </div>
              <img className="headerImg" src="img/agri2.avif" alt="Header" />
            </div>
        </>
    );
} 

export default Header;