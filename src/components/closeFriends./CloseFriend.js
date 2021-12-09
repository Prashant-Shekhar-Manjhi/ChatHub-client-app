import React from 'react';
import "./closeFriend.css";

export default function CloseFriend({user}) {
    return (
        <li className="side-bar-friend">
            <img src={user.profilePicture} alt="" className="side-bar-friend-image" />
            <span className="side-bar-friend-name">{user.username}</span>
        </li>
    );
}
