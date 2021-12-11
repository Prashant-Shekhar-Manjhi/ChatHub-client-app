import React ,{useContext,useState} from 'react';
import "./topbar.css";
import { Link } from "react-router-dom";
import {Search,Person, Chat, Notifications,ArrowDropDownCircle} from '@mui/icons-material';
import { AuthContext } from '../../context/AuthContext';
import Dropdown from '../dropdown/Dropdown';
export default function Topbar() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const user = useContext(AuthContext).user;
    const [dropdownClicked, setDropdownClicked] = useState(false);

    const menuIconHandler = () =>{
        setDropdownClicked(!dropdownClicked);
    }
    return (
        <div className ="topbar-container">
           <div className="topbar-left">
               <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">ChatHub</span>
               </Link>             
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
                <Link to={`/profile/${user._id}`} style={{textDecoration:"none"}}>
                    <div className="topbar-profile-link">
                        <img src = {user.profilePicture ? PF+user.profilePicture : PF+"person/avatar.png"} alt="" className="topbar-image" />
                        <span className="topbar-username">{user.username.split(" ")[0]}</span>
                    </div>
                </Link>
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
                    <div className="topbar-icon-item" onClick={menuIconHandler}>
                    <ArrowDropDownCircle className="topbar-icon" />
                    </div>
                </div>    
           </div>
          {dropdownClicked && <Dropdown user={user}/>}  
         </div>
    )
}
