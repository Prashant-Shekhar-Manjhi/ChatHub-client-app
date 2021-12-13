import React ,{Fragment, useContext, useEffect, useState, useRef} from 'react';
import Topbar from "../../components/topbar/Topbar";
import Conversation from '../../components/conversation/Conversation';
import Message from '../../components/message/Message';
import "./messenger.css";
import Online from '../../components/online/Online';
import {Users} from "../../dummyDate";
import { AuthContext } from '../../context/AuthContext';
import axios from "axios";
import {io} from "socket.io-client";

export default function Messenger() {
    const [conversations, setConversations] = useState([]);
    const loggedInUser = useContext(AuthContext).user;
    const [currentChat, setCurrentChat]= useState(null);
    const [messages, setMessages] = useState([]);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [messageInput, setMessageInput] = useState('');
    const [friend, setFriend] = useState(null);
    const scrollRef = useRef();
    const socket = useRef();

    useEffect(()=>{
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            console.log(data);
            setArrivalMessage({
              senderId: data.senderId,
              messageText: data.text,
              createdAt: Date.now(),
            });
          });
    },[]);

    useEffect(()=>{
        socket.current.emit("addUser", loggedInUser._id);
        socket.current.on("getUsers",user=>{
            console.log(user);
        });
    },[loggedInUser]);

    useEffect(()=>{
        arrivalMessage &&
        currentChat?.members.includes(arrivalMessage.senderId) &&
        setMessages(prev=>[...prev,arrivalMessage]);
    },[arrivalMessage,currentChat]);

    //fetching conversations of loggedInUser...
    useEffect(()=>{
        const getConversations = async ()=>{
            try{
                const res = await axios.get("/conversation/"+loggedInUser?._id);
                setConversations(res.data);
            }catch(err){
                console.log(err);
            }
        }
        getConversations();
    },[loggedInUser]);
    //fetching messages...
    const friendId = currentChat?.members.find((member)=>member!==loggedInUser._id);
    useEffect(()=>{
        if(currentChat)
       { const getMessages = async ()=>{
            const res = await axios("/message/"+currentChat?._id);
            setMessages(res.data);
        }
        
        const getFriend = async ()=>{
            const res = await axios("/user/"+friendId);
            setFriend(res.data.user);
        }
        getFriend();
        getMessages();}

    },[currentChat,loggedInUser, friendId]);

    //sending message..
    const SendMessageHandler = async (e) =>{
        e.preventDefault();
        if(messageInput){
            const message = {
                conversationId:currentChat._id,
                senderId:loggedInUser._id,
                messageText: messageInput
            }

            socket.current.emit("sendMessage",{
                senderId:loggedInUser._id,
                receiverId: friendId,
                text:messageInput
            })
            try{
                const res = await axios.post("/message", message);
                setMessages([...messages,res.data]);
            }catch(err){
                console.log(err);
            }
            setMessageInput("");
        }
    }
    useEffect(()=>{
        scrollRef.current?.scrollIntoView({
            behavior:"smooth"
        })
    },[messages])
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
                        {conversations && conversations.map(conversation=>
                            <div  key={conversation._id}  onClick={()=>setCurrentChat(conversation)}>
                                <Conversation 
                                conversation={conversation} 
                                loggedInUser={loggedInUser}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="messenger-chat-box">
                   {currentChat ? <div className="messenger-chat-box-wrapper">
                       <div className="messenger-chat-box-header">
                            <Online user={friend}/>
                       </div>
                       <hr />
                        <div className="messenger-chat-box-top">
                            {messages.map((message)=>{
                                return(<div key={message._id}  ref={scrollRef}>
                                        <Message 
                                            
                                            message={message} 
                                            own={loggedInUser?._id === message.senderId} 
                                            friend={friend}
                                        />
                                    </div>);      
                                })
                            }
                                
                        </div>
                        <form className="messenger-chat-box-bottom" onSubmit={SendMessageHandler}>
                            <textarea 
                                className="messenger-chat-box-input"
                                placeholder="Write Something..."
                                onChange={(e)=>setMessageInput(e.target.value)}
                                value={messageInput}/>
                            <button type="submit" className="message-send-btn">Send</button>
                            
                        </form>
                    </div> : <div className="messenger-chat-box-message"><span >Open a Conversation for Chat...</span></div>}
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
