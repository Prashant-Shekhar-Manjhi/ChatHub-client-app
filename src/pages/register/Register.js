import axios from 'axios';
import React ,{useRef}from 'react'
import { useNavigate } from 'react-router-dom'
import "./register.css"

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const confirmPassword = useRef();
    const handleClick = async (e)=>{
        e.preventDefault();
        if(password.current.value !== confirmPassword.current.value)
            confirmPassword.current.setCustomValidity("Passwords don't match");
        else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
             await axios.post("/auth/register",user);
             navigate("/login");
        }
   }
    return (
        <div className="register">
        <div className="register-wrapper">
            <div className="register-left">
                <h3 className="register-logo">ChatHub</h3>
                <span className="register-desc">ChatHub helps you connect and share with the people in your life.</span>
            </div>
            <div className="register-right">
                <form className="register-box" onSubmit={handleClick}>
                    <input 
                        type="text" 
                        className="register-input" 
                        placeholder="Username" 
                        ref={username}
                        required
                    />
                    <input 
                        type="email" 
                        className="register-input" 
                        placeholder="Email" 
                        ref={email} 
                        required
                    />
                    <input 
                        type="password" 
                        className="register-input" 
                        placeholder="Password" 
                        ref={password} 
                        required 
                        minLength="6"
                    />
                    <input 
                        type="password" 
                        className="register-input"
                         placeholder="Confirm Password" 
                         ref={confirmPassword} 
                         required 
                         minLength="6"
                        />
                    <button type="submit" className="register-button">Sign Up</button>
                    <hr className="register-hr" />
                    <button type="button"className="register-login-button" onClick={()=>navigate("/login")}>Login to Account</button>
                </form>
            </div>
        </div>
    </div>
    )
}
