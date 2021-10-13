import React from "react";
import {Navele} from "./Navele";
import nicon from "../images/notification.svg";
import eicon from "../images/explore.svg";
import picon from "../images/profile.svg";
import bicon from "../images/bookmark.svg";
import micon from "../images/message.svg";
import licon from "../images/list.svg";
import hicon from "../images/home.svg";
import moicon from "../images/more.svg";
import "../styles/leftpane.css";
import { Searchbar } from "./Searchbar";


export const Leftpane = () => {
  
   const temp = [
     {name:"Home", curicon: hicon},
     {name:"Notifications", curicon: nicon},
     {name:"Explore", curicon: eicon},
     {name:"Messages", curicon: micon},
     {name:"Bookmarks", curicon: bicon},
     {name:"Lists", curicon: licon},
     {name:"Profile", curicon: picon},
     {name:"More", curicon: moicon}
    ];

  return (
    <div className="lp-grid-cnt">
    
        <Searchbar/>
       
      <div id="navbar">
      {temp.map(i=>(
      <Navele key={i.name} name={i.name} logo={i.curicon} status={true} />
      
      ))}
      </div>
      
    </div>
  );
};
