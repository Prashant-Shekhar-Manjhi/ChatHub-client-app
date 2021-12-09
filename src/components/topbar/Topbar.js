import React from 'react';
import "./topbar.css";
import {Search,Person, Chat, Notifications} from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className ="topbar-container">
           <div className="topbar-left">
               <span className="logo">ChatHub</span>
           </div>
           <div className="topbar-centre">
               <div className="search-bar">
                <Search className="search-icon"/>
                <input type="text" className="search-input" placeholder="Search for friends, post, videos" />
               </div>
           </div>
           <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbar-link">Home</span>
                    <span className="topbar-link">Timelines</span>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-icon-item">
                        <Person className="topbar-icon"/>
                        <span className="topbar-icon-badge">1</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Chat className="topbar-icon"/>
                        <span className="topbar-icon-badge">1</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Notifications className="topbar-icon"/>
                        <span className="topbar-icon-badge">1</span>
                    </div>
                </div>
                <img src = "assets/person/1.jpeg" alt="" className="topbar-image" />
           </div>
        </div>
    )
}
