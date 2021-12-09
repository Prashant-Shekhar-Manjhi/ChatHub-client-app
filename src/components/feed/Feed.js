import React from 'react';
import Post from "../post/Post"
import './feed.css';
import Share from '../share/Share';
import {Posts} from "../../dummyDate";

export default function Feed() {
    return (
        <div className="feed">
           <div className="feed-wrapper">
                <Share />
                {Posts.map(p=>{
                    return <Post key={p.id} post = {p}/>
                })}
           </div>
        </div>
    )
}
