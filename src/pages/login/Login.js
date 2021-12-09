import React from 'react';
import "./login.css";

export default function Login() {
    return (
        <div className="login">
            <div className="login-wrapper">
                <div className="login-left">
                    <h3 className="login-logo">ChatHub</h3>
                    <span className="login-desc">ChatHub helps you connect and share with the people in your life.</span>
                </div>
                <div className="login-right">
                    <div className="login-box">
                        <input type="email" className="login-input" placeholder="Email" />
                        <input type="password" className="login-input" placeholder="Password" />
                        <button className="login-button">Login</button>
                        <span className="login-forgot">Forgot Password</span>
                        <hr className="login-hr" />
                        <button className="login-register-button">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
