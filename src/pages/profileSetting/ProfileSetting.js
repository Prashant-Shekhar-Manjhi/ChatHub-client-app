import React,{Fragment, useState, useRef, useContext} from 'react';
import Topbar from '../../components/topbar/Topbar';
import {ModeEditOutlined} from "@mui/icons-material";
import "./profileSetting.css";
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function ProfileSetting() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [file, setFile] = useState(null);
    const {dispatch} =  useContext(AuthContext);
    const loggedInUser = useContext(AuthContext).user;
    const [inputUsername, setInputUsername] = useState(false);
    const [inputEmail, setInputEmail] = useState(false);
    const [inputPassword, setInputPassword] = useState(false);
    const [inputCity, setInputCity] = useState(false);
    const [inputFrom, setInputFrom] = useState(false);
    const [inputRelationShip, setInputRelationShip] = useState(false);
    const [inputDesc, setInputDesc] = useState(false);
    // const [inputUsername, setInputUsername] = useState(false);
    const username = useRef();
    const email = useRef()
    const password = useRef();
    const confirmPassword = useRef();
    const city = useRef();
    const from = useRef();
    const relationship = useRef();
    const desc = useRef();

    const submitHandler = async (event)=>{
        event.preventDefault();
        let data = null;
        if(inputUsername) data = {...data,username:username.current.value};
        if(inputEmail) data = {...data, email: email.current.value};
        if(inputCity) data = {...data,city:city.current.value};
        if(inputFrom) data = {...data,from:from.current.value};
        if(inputRelationShip) data = {...data,relationship:relationship.current.value};
        if(inputDesc) data = {...data,description:desc.current.value};
        if(inputPassword){
            if(password.current.value === confirmPassword.current.value)
            data = {
                ...data,
                password: password.current.value
            }
            else alert("Passwords does not match!");
        }

        if(file){
            const fileData = new FormData();
            const filename = Date.now() + file.name;
            fileData.append("name",filename); 
            fileData.append("file",file);
            data = {...data, profilePicture:filename} 
            try{
                await axios.post("/upload",fileData);
            }catch(err){
                console.log(err)
            }
            try{
                await axios.post("/upload",fileData);
            }catch(err){
                console.log(err)
            }
        }

        if(data){
            data = {...data, id:loggedInUser?._id};
            try{
                await axios.put("/user/"+loggedInUser?._id, data);
                dispatch({type:"UPDATE_USER",payload:data});
                alert("Account has been updated!")
            }catch(err){
                console.log(err);
            }
        }else console.log('no data');
        setInputUsername(false);
        setInputPassword(false);
        setInputCity(false);
        setInputFrom(false);
        setInputRelationShip(false);
        setInputDesc(false);
    
    }
    console.log(file);
    return (
        <Fragment>
             <Topbar/>
            <div className="profile-setting-container">
                <h2 className="profile-setting-heading">General Profile Settings</h2>
                <form className="profile-setting-form" onSubmit={submitHandler}>
                    <div className="profile-setting-image-container">
                        <img src={loggedInUser.profilePicture ? PF+loggedInUser.profilePicture :PF+"person/avatar.png"} alt="" className="profile-setting-image" />
                        <label  htmlFor="profilePicture-input" className="profile-setting-image-icon-container">
                            <ModeEditOutlined className="profile-setting-image-icon"/>
                            <span  className="profile-setting-image-icon-text">Edit</span>
                        </label>
                        <input type="file" id="profilePicture-input" style={{display:"none"}} onChange={(e)=>{setFile(e.target.files[0])}} accept=".png,.jpeg,.jpg"/>
                    </div>
                    <div className="profile-setting-input-container">
                        <span className="label">Username</span>
                         <div className="input-container">
                            {inputUsername ? <input type="text" className="profile-setting-input" ref={username} id="profile-setting-username"/> 
                            : <span className="prev-user">{loggedInUser?.username}</span>}
                            <label htmlFor="profile-setting-username" className="profile-setting-input-icon-container"><ModeEditOutlined className="profile-setting-input-icon" onClick={()=>{setInputUsername(!inputUsername)}}/></label>
                        </div>
                    </div>
                    <div className="profile-setting-input-container">
                        <span className="label">Email</span>
                         <div className="input-container">
                            {inputEmail ? <input type="text" className="profile-setting-input" ref={email} id="profile-setting-email"/> 
                            : <span className="prev-user">{loggedInUser?.email}</span>}
                            <label htmlFor="profile-setting-email" className="profile-setting-input-icon-container"><ModeEditOutlined className="profile-setting-input-icon" onClick={()=>{setInputEmail(!inputEmail)}}/></label>
                        </div>
                    </div>
                    <div className="profile-setting-input-container">
                        <span className="label">Password</span>
                        <div className="input-container">
                            {inputPassword ? <input type="password" className="profile-setting-input" ref={password} id="profile-setting-password"/>
                             : <span className="prev-user">********</span>}
                            <label htmlFor="profile-setting-password" className="profile-setting-input-icon-container"><ModeEditOutlined className="profile-setting-input-icon" onClick={()=>{setInputPassword(!inputPassword)}}/></label> 
                        </div>
                    </div>
                    {inputPassword && <div className="profile-setting-input-container">
                        <span className="label">Confirm Password</span>
                        <div className="input-container">
                            <input type="password" className="profile-setting-input" ref={confirmPassword}/>
                        </div>
                    </div>}
                    <div className="profile-setting-input-container">
                        <span className="label">City</span>
                        <div className="input-container">
                           {inputCity ? <input type="text" className="profile-setting-input" ref={city} id="profile-setting-City"/>
                            : <span className="prev-user">{loggedInUser?.city}</span>}
                            <label htmlFor="profile-setting-City" className="profile-setting-input-icon-container"><ModeEditOutlined className="profile-setting-input-icon" onClick={()=>{setInputCity(!inputCity)}}/></label>
                        </div>
                    </div>
                    <div className="profile-setting-input-container">
                        <span className="label">From</span>
                        <div className="input-container">
                            {inputFrom ? <input type="text" className="profile-setting-input" ref={from} id="profile-setting-From"/>
                            : <span className="prev-user">{loggedInUser?.from}</span>}
                            <label htmlFor="profile-setting-From" className="profile-setting-input-icon-container"><ModeEditOutlined className="profile-setting-input-icon" onClick={()=>{setInputFrom(!inputFrom)}}/></label>
                        </div>
                    </div>
                    <div className="profile-setting-input-container">
                        <span className="label">Relationship</span>
                        <div className="input-container">
                           { inputRelationShip ? <input type="text" className="profile-setting-input" ref={relationship} id="profile-setting-Relation"/>
                            :<span className="prev-user">{loggedInUser?.relationship}</span>}
                           <label htmlFor="profile-setting-Relation" className="profile-setting-input-icon-container"><ModeEditOutlined className="profile-setting-input-icon" onClick={()=>{setInputRelationShip(!inputRelationShip)}}/></label>
                        </div>
                    </div>
                    <div className="profile-setting-input-container">
                        <span className="label">Description</span>
                        <div className="profile-setting-input-description-container" >
                        {!inputDesc ? <span className="prev-user-desc">{loggedInUser?.description}</span>
                         : <textarea 
                            className="profile-setting-input-description"
                            placeholder="Update Description..."
                            ref={desc}
                            id="profile-setting-desc"
                            />}
                        </div>
                        <label htmlFor="profile-setting-desc"><ModeEditOutlined className="profile-setting-desc-icon" onClick={()=>{setInputDesc(!inputDesc)}}/> </label>
                    </div>

                    <div className="profile-setting-submit-button-container">
                        <button type="submit" className="profile-setting-submit-button">Submit</button>
                    </div>
                </form>   
            </div>    
        </Fragment>
    )
}
