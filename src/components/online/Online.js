import React from 'react';
import "./online.css";

export default function Online({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
            <li className="right-bar-friend">
                <div className="right-bar-profile-image-container">
                    <img src={user?.profilePicture ? PF+user.profilePicture : PF+"person/avatar.png"} alt="" className="right-bar-profile-image" />
                    <span className="right-bar-online"></span>
                </div>
                <span className="right-bar-username">{user?.username}</span>
            </li>
    )
}