import React,{useState,useEffect, useContext} from 'react';
import axios from "axios";
import Post from "../post/Post"
import './feed.css';
import Share from '../share/Share';
import { AuthContext } from '../../context/AuthContext';

export default function Feed({userId}) {
    const [posts,setPosts] = useState([]);
    const user = useContext(AuthContext).user;

    useEffect(()=>{ 
        const fetchPosts = async ()=>{
            const res = userId 
                ? await axios.get("/post/profile/"+userId) 
                : await axios.get("/post/timelines/"+user._id);
            if(userId) setPosts(res.data.posts.sort((p1,p2)=>{
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            }));
            else setPosts(res.data.timelines.sort((p1,p2)=>{
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            }));
        } 
        fetchPosts();
    },[userId,user._id]);
    return (
        <div className="feed">
           <div className="feed-wrapper">
                {(!userId || userId === user._id) && <Share/>}
                {posts.map(p=>{
                    return <Post key={p._id} post = {p}/>
                })}
           </div>
        </div>
    )
}
