import React, { useState } from "react";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";
import "../../styles/ChatApp.css";
const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (msg) => {
    setMessages([...messages, msg]);
  };

  return (
    <div className="chat-container">
      <h2>Mini Chat App</h2>
      <MessageInput addMessage={addMessage} />
      <MessageList messages={messages} />
    </div>
  );
};

export default ChatApp;