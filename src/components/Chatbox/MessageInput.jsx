import React, { useState } from "react";

const MessageInput = ({ addMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() === "") return;
    addMessage(message);
    setMessage("");
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Type message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send Message</button>
    </div>
  );
};

export default MessageInput;