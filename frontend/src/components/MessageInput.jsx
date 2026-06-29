import React, { useState } from "react";

function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 15px",
        backgroundColor: "#F0F2F5",
        borderTop: "1px solid #ddd",
      }}
    >
      {/* Emoji */}
      <button
        style={{
          border: "none",
          background: "transparent",
          fontSize: "22px",
          cursor: "pointer",
        }}
      >
        😊
      </button>

      {/* Attachment */}
      <button
        style={{
          border: "none",
          background: "transparent",
          fontSize: "22px",
          cursor: "pointer",
        }}
      >
        📎
      </button>

      {/* Input */}
      <input
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        style={{
          flex: 1,
          padding: "12px 16px",
          borderRadius: "25px",
          border: "none",
          outline: "none",
          fontSize: "16px",
        }}
      />

      {/* Send Button */}
      <button
        onClick={handleSend}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          color: "white",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
        }}
      >
        ➤
      </button>
    </div>
  );
}

export default MessageInput;