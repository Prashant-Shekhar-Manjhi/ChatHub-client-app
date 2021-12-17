import React from 'react';
import "./postMenuDropdown.css";
import axios from "axios";

export default function PostMenuDropdown({loggedInUser,post}) {

    const postEditHandler = ()=>{
        console.log("Edit");
    }

    const postShareHandler = ()=>{
        console.log("Share");
    }

    const postDeleteHandler =  async ()=>{
        const user = {
            userId: loggedInUser._id
        }
        try{
            const res = await axios.delete("/post/"+post._id, {data: user});
            console.log(res.data);
            window.location.reload();
        }catch(err){
            console.log(err);
        }

    }    
    return (
        <div className="post-menu-dropdown">
            <ul className="post-menu-items">
                <li className="post-menu-item" onClick={postEditHandler}>Edit</li>
                <li className="post-menu-item" onClick={postShareHandler}>Share</li>
                <li className="post-menu-item" onClick={postDeleteHandler}>Delete</li>
            </ul>
        </div>
    )
}
