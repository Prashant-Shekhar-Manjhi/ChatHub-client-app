import React ,{Fragment} from 'react';
import Topbar from "../../components/topbar/Topbar";
import Conversation from '../../components/conversation/Conversation';
import Message from '../../components/message/Message';
import "./messenger.css";
import Online from '../../components/online/Online';
import {Users} from "../../dummyDate";

export default function Messenger() {
    return (
        <Fragment>
            <Topbar/>
            <div className="messenger-container">
                <div className="messenger-conversation-box">
                    <div className="messenger-conversation-box-wrapper">
                        <input type="text" 
                            className="messenger-conversation-search" 
                            placeholder="Search Friend"
                        />
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                        <Conversation/>
                    </div>
                </div>
                <div className="messenger-chat-box">
                    <div className="messenger-chat-box-wrapper">
                        <div className="messenger-chat-box-top">
                            <Message own={true}/>
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                            <Message own={true}/>
                            <Message own={true}/>
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                            <Message own={true}/>
                        </div>
                        <div className="messenger-chat-box-bottom">
                            <textarea 
                                className="messenger-chat-box-input"
                                placeholder="Write Something..."/>
                            <button className="message-send-btn">Send</button>
                            
                        </div>
                    </div>
                </div>
                <div className="messenger-online-box">
                    <div className="messenger-online-box-wrapper">
                    {Users.map(u=><Online key={u.id} user={u}/>)}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
