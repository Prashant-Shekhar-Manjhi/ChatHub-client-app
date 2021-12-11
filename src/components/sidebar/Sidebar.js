import React from 'react'
import "./sidebar.css";
import { useNavigate } from 'react-router';
import {RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmarks,
    HelpOutline,
    WorkOutline,
    Event,
    School} from "@mui/icons-material";
import {Users} from "../../dummyDate";
import CloseFriend from '../closeFriends./CloseFriend';
export default function Sidebar() {
    const navigate = useNavigate();
    return (
        <div className="side-bar">
            <div className="side-bar-wrapper">
                <ul className="side-bar-list">
                    <li className="side-bar-list-item">
                        <RssFeed className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Feed</span>
                    </li>
            
                    <li className="side-bar-list-item" onClick={()=>(navigate("/messenger"))}>
                        <Chat className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Chats</span>
                    </li>
                    
                    <li className="side-bar-list-item">
                        <PlayCircleFilledOutlined className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Videos</span>
                    </li>
                       
                    <li className="side-bar-list-item">
                        <Group className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Groups</span>
                    </li>
                    <li className="side-bar-list-item">
                        <Bookmarks className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Bookmarks</span>
                    </li>
                    <li className="side-bar-list-item">
                        <HelpOutline className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Questions</span>
                    </li>
                    <li className="side-bar-list-item">
                        <WorkOutline className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Jobs</span>
                    </li>
                    <li className="side-bar-list-item">
                        <Event className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Events</span>
                    </li>
                    <li className="side-bar-list-item">
                        <School className="side-bar-icon"/>
                        <span className="side-bar-list-item-text">Course</span>
                    </li>
                </ul>
                <button className="side-bar-button">Show More</button>
                <hr className="side-bar-hr"/>
                <ul className="side-bar-friend-list">
                    {Users.map(u=><CloseFriend key={u.id} user={u}/>)}
                </ul>
            </div>
        </div>
    )
}
