import React, {Fragment} from 'react';
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./profile.css";

export default function Profile() {
    return (
       <Fragment>
           <Topbar/>
           <div className="profile-container">
               <Sidebar/>
               <div className="profile-right">
                   <div className="profile-right-top">
                       <div className="profile-cover">
                            <img className="profile-cover-image" src="assets/post/3.jpeg" alt=""/>
                            <img className="profile-user-image" src="assets/person/3.jpeg" alt=""/>
                        </div>
                        <div className="profile-info">
                            <h4 className="profile-info-name">Prashant Shekhar</h4>
                            <span className="profile-info-desc">Hello! My friends</span>
                        </div>
                    </div>
                   <div className="profile-right-bottom">
                       <Feed/>
                       <Rightbar profile/>
                   </div>
                </div>
                   
            </div>
       </Fragment>
    )
}
