import React,{useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import {Add, Remove} from "@mui/icons-material";
import {AuthContext} from "../../context/AuthContext";

export default function ProfileRightbar({user}) {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    const [friends, setFriends] = useState([]);
    const loggedInUser = useContext(AuthContext).user;
    const [isFollow, setIsFollow] = useState(loggedInUser.followings.includes(user?._id));
    const {dispatch} =  useContext(AuthContext);
    
    useEffect(()=>{
        setIsFollow(loggedInUser.followings.includes(user?._id));
    },[loggedInUser, user]);

    useEffect(()=>{
        const getFriends = async ()=>{
            try{
                const friendList = await axios.get("/user/friends/"+user._id);
                setFriends(friendList.data.friendList);
            }catch(err){
                console.log(err);
            }
        }
        getFriends();
    },[user._id]);

    const handleClick = async ()=>{
        try{
            if(isFollow){
                await axios.put("/user/"+user._id+"/unfollow",{id: loggedInUser._id});
                dispatch({type:"UNFOLLOW",payload:user._id});
            }else{
                await axios.put("/user/"+user._id+"/follow",{id: loggedInUser._id});
                dispatch({type:"FOLLOW",payload:user._id});
            }
        }catch(error){
            console.log(error);
        }
        setIsFollow(!isFollow);
    }

    let button;
    if(loggedInUser._id !== user._id){
        button = <button className="profile-right-bar-follow-button" onClick={handleClick}>
            {isFollow ? "Unfollow" : "follow"}
        </button>
    }
    return (
        <div className="right-bar">
            <div className="right-bar-wrapper">
                <div className="right-bar-title-heading">
                    <h4 className="right-bar-title">User's Information</h4>
                    {button}
                </div>             
                <div className="right-bar-info">
                    <div className="right-bar-info-item">
                        <span className="right-bar-info-key">City:</span>
                        <span className="right-bar-info-value">{user.city}</span>
                    </div>
                    <div className="right-bar-info-item">
                        <span className="right-bar-info-key">From:</span>
                        <span className="right-bar-info-value">{user.from}</span>
                        </div>
                    <div className="right-bar-info-item">
                        <span className="right-bar-info-key">Relationship:</span>
                        <span className="right-bar-info-value">
                            {user.relationship}
                        </span>
                    </div>
                </div>
                {friends.length>0 && <h4 className="right-bar-title">User's Friends</h4>}
                <div className="right-bar-followings">
                {friends.map(friend=>{
                    return(
                        <div key={ friend._id} className="right-bar-following">
                            <Link to={"/profile/"+friend._id}>
                                    <img 
                                    src={friend.profilePicture?PF+friend.profilePicture:PF+"person/avatar.png"}
                                    alt="" className="right-bar-following-image" 
                                />
                            </Link>
                            <span className="right-bar-following-name">{friend.username}</span>
                        </div> 
                    );
                })}
                            
            </div>
        </div>
    </div>
);
}
