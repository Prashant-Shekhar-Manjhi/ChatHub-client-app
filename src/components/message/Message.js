import React from 'react';
import "./message.css"

export default function Message({own}) {
    return (
        <div className={own ?"message-container own" : "message-container"}>
            <div className="message-top">
                <img src="/assets/person/1.jpeg" alt="" className="message-image" />
                <span className="message-text">
                 Natus tempore officia porro alias!
                </span>
            </div>
            <p className="message-time">3 minutes ago</p>
        </div>
    )
}
