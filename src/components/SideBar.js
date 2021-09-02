import React from 'react';
import {SidebarData} from './SideBarData';
import '../css/sidebar.css';
import { useHistory } from "react-router-dom";
function Sidebar(){
    let history = useHistory();

    return <div 
    className="Sidebar"
    style={{width:'30%'}}
    >
        <ul 
        className="SidebarList">
            {
                SidebarData.map((val,key)=>{
                    return (
                        <li 
                            key={key} 
                            className="row"
                            id={window.location.pathname == val.link ?"active":""}
                            onClick={()=>{history.push(val.link)}} >
                            {" "}
                            <div id="icon">{val.icon}</div>{" "}
                            <div id="title">{val.title}</div>
                        </li>
                        
                    )
                })
            }
        </ul>
    </div>
}

export default Sidebar;