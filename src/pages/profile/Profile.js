import React, {Fragment,useEffect, useState} from 'react';
import axios from "axios";
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar";
// import Rightbar from "../../components/rightbar/Rightbar";
import ProfileRightbar from '../../components/rightbar/ProfileRightbar';
import Feed from "../../components/feed/Feed";
import "./profile.css";
import {useParams} from "react-router";

export default function Profile() {
    const [user, setUser] = useState({});
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const param = useParams();
    const userId = param.userId
    useEffect(()=>{ 
        const fetchUser = async ()=>{
            const res = await axios.get(`/user/${userId}`);
            setUser(res.data.user);
        } 
        fetchUser();
    },[userId]);
    return (
       <Fragment>
           <Topbar/>
           <div className="profile-container">
               <Sidebar/>
               <div className="profile-right">
                   <div className="profile-right-top">
                       <div className="profile-cover">
                            <img className="profile-cover-image" src={user.coverPicture ? PF+ user.coverPicture:PF+"person/nocover.jpg"} alt=""/>
                            <img className="profile-user-image" src={user.coverPicture ? PF+ user.profilePicture:PF+"person/avatar.png"} alt=""/>
                        </div>
                        <div className="profile-info">
                            <h4 className="profile-info-name">{user.username}</h4>
                            <span className="profile-info-desc">{user.description}</span>
                        </div>
                    </div>
                   <div className="profile-right-bottom">
                       <Feed userId={param.userId}/>
                       <ProfileRightbar user={user}/>
                   </div>
                </div>
                   
            </div>
       </Fragment>
    )
}
