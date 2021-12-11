import React from 'react';
import {Users} from "../../dummyDate";
import Online from '../online/Online';
import "./rightbar.css";

export default function HomeRightbar() {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
   
    return (
        <div className="right-bar">
            <div className="right-bar-wrapper">
                <div className="birthday-container">
                    <img className="birthday-image" src={PF+"gift.png"} alt="" />
                    <span className="birthday-text"><strong>Crish Hemswort</strong> ant <strong>4 other friends</strong> have a birthday today. </span>
                </div>
                <img className="right-bar-Ad" src={PF+"ad.png"} alt="" />
                <h4 className="right-bar-title">Online Friends</h4>
                <ul className="right-bar-friend-list">
                    {Users.map(u=><Online key={u.id} user={u}/>)}
                </ul>
            </div>
        </div>
    );
}
