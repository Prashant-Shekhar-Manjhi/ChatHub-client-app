import React, { Fragment } from 'react'
import "./rightbar.css";
import {Users} from "../../dummyDate";
import Online from '../online/Online';

export default function Rightbar({profile}) {
    const HomeRightbar = ()=>{
        return (
            <Fragment>
                <div className="birthday-container">
                    <img className="birthday-image" src="assets/gift.png" alt="" />
                    <span className="birthday-text"><strong>Crish Hemswort</strong> ant <strong>4 other friends</strong> have a birthday today. </span>
                </div>
                <img className="right-bar-Ad" src="assets/ad.png" alt="" />
                <h4 className="right-bar-title">Online Friends</h4>
                <ul className="right-bar-friend-list">
                    {Users.map(u=><Online user={u}/>)}
                </ul>
            </Fragment>
        );
    }

    const ProfileRightbar = ()=>{
        return (
            <Fragment>
                <h4 className="right-bar-title">User's Information</h4>
                <div className="right-bar-info">
                    <div className="right-bar-info-item">
                        <span className="right-bar-info-key">City:</span>
                        <span className="right-bar-info-value">Patna</span>
                    </div>
                    <div className="right-bar-info-item">
                        <span className="right-bar-info-key">From:</span>
                        <span className="right-bar-info-value">Chhapra</span>
                    </div>
                    <div className="right-bar-info-item">
                        <span className="right-bar-info-key">Relationship:</span>
                        <span className="right-bar-info-value">Single</span>
                    </div>
                </div>
                <h4 className="right-bar-title">User's Friends</h4>
                <div className="right-bar-followings">
                    <div className="right-bar-following">
                        <img src="assets/person/1.jpeg" alt="" className="right-bar-following-image" />
                        <span className="right-bar-following-name">Jhon Carter</span>
                    </div>
                    <div className="right-bar-following">
                        <img src="assets/person/2.jpeg" alt="" className="right-bar-following-image" />
                        <span className="right-bar-following-name">Jhon Carter</span>
                    </div>
                    <div className="right-bar-following">
                        <img src="assets/person/3.jpeg" alt="" className="right-bar-following-image" />
                        <span className="right-bar-following-name">Jhon Carter</span>
                    </div>
                    <div className="right-bar-following">
                        <img src="assets/person/4.jpeg" alt="" className="right-bar-following-image" />
                        <span className="right-bar-following-name">Jhon Carter</span>
                    </div>
                    <div className="right-bar-following">
                        <img src="assets/person/5.jpeg" alt="" className="right-bar-following-image" />
                        <span className="right-bar-following-name">Jhon Carter</span>
                    </div>
                    <div className="right-bar-following">
                        <img src="assets/person/6.jpeg" alt="" className="right-bar-following-image" />
                        <span className="right-bar-following-name">Jhon Carter</span>
                    </div>
                    
                </div>
            </Fragment>
        );
    }
    return (
        <div className="right-bar">
            <div className="right-bar-wrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}
