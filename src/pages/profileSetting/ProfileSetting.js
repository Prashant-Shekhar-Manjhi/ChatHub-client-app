import React,{Fragment, useState} from 'react';
import Topbar from '../../components/topbar/Topbar';
import {ModeEditOutlined} from "@mui/icons-material";
import "./profileSetting.css";
// import { AuthContext } from '../../context/AuthContext';

export default function ProfileSetting() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [file, setFile] = useState(null);
    // const loggedInUser = useContext(AuthContext).user;
    console.log(file);
    return (
        <Fragment>
             <Topbar/>
            <div className="profile-setting-container">
                <h2 className="profile-setting-heading">General Profile Settings</h2>
                <form className="profile-setting-form">
                    <div className="profile-setting-image-container">
                        <img src={PF+"person/avatar.png"} alt="" className="profile-setting-image" />
                        <label  htmlFor="profilePicture-input" className="profile-setting-image-icon-container">
                            <ModeEditOutlined className="profile-setting-image-icon"/>
                            <span  className="profile-setting-image-icon-text">Edit</span>
                        </label>
                        <input type="file" id="profilePicture-input" style={{display:"none"}} onChange={(e)=>setFile(e.target.value)} accept=".png,.jpeg,.jpg"/>
                    </div>
                    <div className="profile-setting-input-container">
                        <span className="label">Email</span>
                        <div className="input-container">
                            <input type="email" className="profile-setting-input"/>
                            <ModeEditOutlined className="profile-setting-image-icon"/>  
                        </div>
                    </div>
                    <div className="profile-setting-input-container">
                        <span className="label">Password</span>
                        <div className="input-container">
                            <input type="password" className="profile-setting-input" />
                            <ModeEditOutlined className="profile-setting-image-icon"/>  
                        </div>
                    </div>
                    <div className="profile-setting-input-container">
                        <span className="label">Confirm Password</span>
                        <div className="input-container">
                            <input type="password" className="profile-setting-input" />
                            <ModeEditOutlined className="profile-setting-image-icon"/>  
                        </div>
                    </div>
                    <div className="profile-setting-input-container">
                        <span className="label">City</span>
                        <div className="input-container">
                            <input type="text" className="profile-setting-input" />
                            <ModeEditOutlined className="profile-setting-image-icon"/>  
                        </div>
                    </div>
                    <div className="profile-setting-input-container">
                        <span className="label">From</span>
                        <div className="input-container">
                            <input type="text" className="profile-setting-input" />
                            <ModeEditOutlined className="profile-setting-image-icon"/>  
                        </div>
                    </div>
                    <div className="profile-setting-input-container">
                        <span className="label">Relationship</span>
                        <div className="input-container">
                            <input type="text" className="profile-setting-input" />
                            <ModeEditOutlined className="profile-setting-image-icon"/>  
                        </div>
                    </div>
                    <div className="profile-setting-input-container">
                        <textarea 
                            className="profile-setting-input-description"
                            placeholder="Update Description..."
                            />
                    </div>

                    <div className="profile-setting-submit-button-container">
                        <button type="submit" className="profile-setting-submit-button">Submit</button>
                    </div>
                </form>   
            </div>    
        </Fragment>
    )
}
