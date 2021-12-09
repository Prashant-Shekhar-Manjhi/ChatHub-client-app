import React, {useState} from 'react';
import "./post.css";
import {MoreVert} from "@mui/icons-material";
import {Users} from "../../dummyDate";

export default function Post(props) {
    const [like,setLike] = useState(props.post.like);
    const [isLiked, setIsLiked] = useState(false);
    const likeHandler = ()=>{
        if(!isLiked){
            setLike(like+1);
            setIsLiked(true);
        }else{
            setLike(like-1);
            setIsLiked(false);
        }
    }
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-profile-image" src={Users.filter(u=>u.id === props.post.userId)[0].profilePicture} alt="" />
                        <span className="post-username">{Users.filter(u=>u.id === props.post.userId)[0].username}</span>
                        <span className="post-date">{props.post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert className="post-top-icon"/>
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">{props.post.desc}</span>
                    <img className="post-image" src={props.post.photo} alt="" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src="assets/like.png" alt="" className="like-icon" onClick={likeHandler}/>
                        <img src="assets/heart.png" alt="" className="like-icon" onClick={likeHandler}/>
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
