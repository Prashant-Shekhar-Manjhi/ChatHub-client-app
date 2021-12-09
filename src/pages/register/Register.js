import React from 'react'
import "./register.css"

export default function Register() {
    return (
        <div className="register">
        <div className="register-wrapper">
            <div className="register-left">
                <h3 className="register-logo">ChatHub</h3>
                <span className="register-desc">ChatHub helps you connect and share with the people in your life.</span>
            </div>
            <div className="register-right">
                <div className="register-box">
                    <input type="text" className="register-input" placeholder="Username" />
                    <input type="email" className="register-input" placeholder="Email" />
                    <input type="password" className="register-input" placeholder="Password" />
                    <input type="password" className="register-input" placeholder="Confirm Password" />
                    <button className="register-button">Sign Up</button>
                    <hr className="register-hr" />
                    <button className="register-login-button">Login to Account</button>
                </div>
            </div>
        </div>
    </div>
    )
}
