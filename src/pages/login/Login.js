import React, { useRef, useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import "./login.css";
import { loginCall } from '../../apiCalls';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate();
    const {error,isFetching, dispatch} =  useContext(AuthContext);
    const email = useRef();
    const password = useRef();
    const handleClick = (e) =>{
        e.preventDefault();
        loginCall({email: email.current.value ,password: password.current.value}, dispatch)
    }
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">ChatHub</h3>
                    <span className="login-desc">ChatHub helps you connect and share with the people in your life.</span>
                </div>
                <div className="login-right">
                    <form className="login-box" onSubmit={handleClick} >
                        <input type="email" className={error ? "login-input login-error-input": "login-input"} placeholder="Email" ref={email} required/>
                        {error && <span className="login-error-message">
                            The email address and Password you entered isn't connected to an account.
                        </span>}   
                        <input type="password" className="login-input" placeholder="Password" ref={password} minLength="6" required/>
                        <button type="submit" className="login-button" disabled={isFetching}>
                            {!isFetching ? "Log In" :  <CircularProgress size="20px" style={{color:"#fff"}}/>}
                        </button>
                        <span className="login-forgot">Forgot Password</span>
                        <hr className="login-hr" />   
                        <button type="button" className="login-register-button" onClick={()=>{navigate("/register")}}>
                                Create New Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
