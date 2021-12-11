import React from 'react';
import "./dropdown.css";
import {Logout,Settings} from "@mui/icons-material";
import {Link } from 'react-router-dom';
export default function Dropdown({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const logoutHandler = ()=>{
        localStorage.removeItem("loggedInUser");
        window.location.reload();
    }
    return (
        <div className="dropdown-container">
            <ul className="dropdown-menu">
                <Link to={`/profile/${user._id}`} style={{textDecoration:"none"}}>
                    <li className="dropdown-menu-item">
                        <img src = {user.profilePicture ? PF+user.profilePicture : PF+"person/avatar.png"} alt="" className="topbar-image" />
                        <span className="dropdown-menu-item-text">{user.username}</span>
                    </li>
                </Link>
                <hr className="dropdown-hr"/>
                <li className="dropdown-menu-item">
                    <Settings className="dropdown-menu-item-icon"/>
                    <span className="dropdown-menu-item-text">Profile Settings</span>
                </li>
                <li className="dropdown-menu-item" onClick={logoutHandler}>
                    <Logout className="dropdown-menu-item-icon"/>
                    <span className="dropdown-menu-item-text">logout</span>
                </li>
            </ul>
        </div>
    )
}
