import React from 'react';
import "./share.css";
import {PermMedia,Label, Room, EmojiEmotions} from "@mui/icons-material";

export default function Share() {
    return (
        <div className="share">
            <div className="share-wrapper">
                <div className="share-top">
                   <img className="share-profile-picture"src="assets/person/1.jpeg" alt="" />
                   <input 
                        className="share-input" 
                        placeholder="what's in your mind."
                        />
                </div>
                <hr className="share-hr" />
                <div className="share-bottom">
                    <div className="share-options">
                        <div className="share-option">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="share-option-text">Photo or Video</span>
                        </div>
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
                    <button className="share-button">Share</button>
                </div>
            </div>
        </div>
    )
}
