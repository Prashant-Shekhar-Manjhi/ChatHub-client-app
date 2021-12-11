import React,{useContext,useRef, useState} from 'react';
import "./share.css";
import {PermMedia,Label, Room, EmojiEmotions, Cancel} from "@mui/icons-material";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const loggedInUser = useContext(AuthContext).user;
    const desc = useRef();
    const [file,setFile] = useState(null);
    const clickHandler = async (e)=>{
        e.preventDefault();
        const newPost = {
            userId: loggedInUser._id,
            description: desc.current.value,   
        }
        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename); 
            data.append("file",file);
            newPost.img = filename; 
            try{
                await axios.post("/upload",data);
            }catch(err){
                console.log(err)
            }
        }
        try{
           await axios.post("/post",newPost);
           window.location.reload();
        }catch(error){
            console.log(error);
        }
    }
    const fileChangeHandler = (e)=>{
        setFile(e.target.files[0]);   //just choose one file...
    } 
    return (
        <div className="share">
            <div className="share-wrapper">
                <div className="share-top">
                   <img className="share-profile-picture"src={loggedInUser.profilePicture ? PF + loggedInUser.profilePicture : PF+"person/avatar.png"} alt="" />
                   <input 
                        className="share-input" 
                        placeholder={"what's in your mind "+loggedInUser.username+"?"}
                        ref={desc}
                        />
                </div>
                {file && 
                    <div className="share-image-container">
                        <img src={URL.createObjectURL(file)} alt="" className="share-image" />
                        <Cancel className="share-image-cancel-button" onClick={()=>{setFile(null)}}/>
                    </div>}
               
                 <hr className="share-hr"/>
                <form className="share-bottom" onSubmit={clickHandler}>
                    <div className="share-options">
                        <label htmlFor="file" className="share-option">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="share-option-text">Photo or Video</span>
                            <input style={{display:"none"}}type="file" id="file" accept=".png,.jpeg,.jpg" onChange={fileChangeHandler}/>
                        </label>
                        <div className="share-option">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="share-option-text">Tag</span>
                        </div>
                        <div className="share-option">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="share-option-text">Location</span>
                        </div>
                        <div className="share-option">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="share-option-text">Feelings</span>
                        </div>
                    </div>
                    <button type="submit" className="share-button">Share</button>
                </form>
            </div>
        </div>
    )
}
