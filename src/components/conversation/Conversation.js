import React,{useState, useEffect}from 'react';
import axios from "axios";
import "./conversation.css";


export default function Conversation({conversation, loggedInUser}) {
    const [friend,setFriend] = useState(null);



    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    useEffect(()=>{
            const friendId = conversation.members.find((member)=>member !== loggedInUser._id);
            const getFriend = async ()=>{
            const res = await axios("/user/"+friendId);
            setFriend(res.data.user);
        }
        getFriend();
    },[conversation,loggedInUser]);
    return (
        <div className="conversation-container">
           <img src={friend?.profilePicture ? PF+friend.profilePicture:PF+"person/avatar.png"} alt="" className="conversation-profile-image"/>
           <span className="conversation-name">
              {friend?.username}
           </span>
        </div>
    )
}
