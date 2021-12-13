import React, {useContext} from 'react';
import "./message.css";
import{format} from "timeago.js";
import { AuthContext } from '../../context/AuthContext';

export default function Message({message, own, friend}) {
    const loggedInUser = useContext(AuthContext).user;
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className={own ? "message-container own" : "message-container"}>
              <div className="message-top">
                <img src={own ? (loggedInUser.profilePicture 
                    ? PF+loggedInUser.profilePicture 
                    : (PF+"person/avatar.png"
                    )) 
                    : (friend?.profilePicture 
                    ? PF+friend.profilePicture 
                    : PF+"person/avatar.png")} alt="" className="message-image" />
                <span className="message-text">
                {message.messageText}
                </span>
            </div>
            <p className="message-time">{format(message.createdAt)}</p>
        </div>
    )
}
