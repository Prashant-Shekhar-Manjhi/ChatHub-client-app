import React, {useState, useEffect}from 'react';
import axios from "axios"
import "./chatOnline.css";

export default function ChatOnline({onlineUsers,loggedInUserId, setCurrentChat}) {
    const [friends,setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);

    useEffect(()=>{
        const getFriends = async ()=>{
            try{
                const res = await axios.get("/user/friends/"+loggedInUserId);
                setFriends(res.data.friendList);
            }catch(err){
                console.log(err)
            }    
        }
        getFriends();
    },[loggedInUserId])

    useEffect(()=>{
        setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
    },[setOnlineFriends,friends,onlineUsers]);
    console.log(onlineFriends)
    
    const handleClick = async (onlineFriend) =>{
        try {
            const res = await axios.get(
              `/conversation/find/${loggedInUserId}/${onlineFriend._id}`
            );
            setCurrentChat(res.data);
          } catch (err) {
            console.log(err);
          }
    }
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
       { (onlineFriends.length > 0) && <div className="chat-online-container">
            {onlineFriends.map(onlineFriend=>{
                return <div key={onlineFriend._id}>
                <h4 className="chat-online-heading">Online Friends</h4>
                <div className="chat-online-friend" onClick={()=>handleClick(onlineFriend)}>
                    <div className="chat-online-image-container">
                        <img src={onlineFriend?.profilePicture ?PF+onlineFriend.profilePicture :PF+"person/avatar.png"} alt="userimage" className="chat-online-image" />
                        <span className="chat-online-badge"></span>
                    
                    </div>
                    <span className="chat-online-name">{onlineFriend?.username}</span>
                </div>
                </div>
            })}
        </div>}
        </>
    )
}
