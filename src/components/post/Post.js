import React, {useState, useEffect, useContext} from 'react';
import {Link} from "react-router-dom"
import axios from "axios";
import "./post.css";
import {MoreVert} from "@mui/icons-material";
import {format} from "timeago.js";
import { AuthContext } from '../../context/AuthContext';
import PostMenuDropdown from '../dropdown/PostMenuDropdown';


export default function Post(props) {
    const [like,setLike] = useState(props.post.likes.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const loggedInUser = useContext(AuthContext).user;
    const [showMenu, setShowMenu] = useState(false);
    const likeHandler = ()=>{
        try{
            axios.put("/post/"+props.post._id+"/like", {userId: loggedInUser._id});
        }catch(error){}

        if(!isLiked){
            setLike(like+1);
            setIsLiked(true);
        }else{
            setLike(like-1);
            setIsLiked(false);
        }
    }
    useEffect(()=>{ 
        const fetchUser = async ()=>{
            const res = await axios.get(`/user/${props.post.userId}`);
            setUser(res.data.user);
        } 
        fetchUser();
    },[props.post.userId]);

    useEffect(()=>{
        setIsLiked(props.post.likes.includes(loggedInUser._id));
    },[loggedInUser._id,props.post.likes]);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const postMenuHandler = ()=>{
        setShowMenu(!showMenu);
    }
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <Link to={`/profile/${user._id}`}>
                            <img className="post-profile-image" 
                                src={PF+user.profilePicture || PF+"person/avatar.png"} 
                                alt="" />
                        </Link>                     
                        <span className="post-username">{user.username}</span>
                        <span className="post-date">{format(props.post.createdAt)}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert className="post-top-icon" onClick={postMenuHandler}/>
                    </div>
                    {showMenu && <PostMenuDropdown/>}
                </div>
                <div className="post-center">
                    <span className="post-text">{props.post.description}</span>
                    <img className="post-image" src={PF+props.post.img} alt="" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src={PF+"like.png"} alt="" className="like-icon" onClick={likeHandler}/>
                        <img src={PF+"heart.png"} alt="" className="like-icon" onClick={likeHandler}/>
                        <span className="post-like-counter">{like} Likes</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">{props.post.comment} comments</span>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
