import React from "react";

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((msg, index) => (
        <p key={index} className="message">
          {msg}
        </p>
      ))}
    </div>
  );
};

export default MessageList;