import React from "react";

function MessageBubble({ message }) {
  const isSent = message.sender === "me";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isSent ? "flex-end" : "flex-start",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: isSent ? "#DCF8C6" : "#FFFFFF",
          padding: "10px 15px",
          borderRadius: "12px",
          maxWidth: "60%",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }}
      >
        <p style={{ margin: 0 }}>{message.text}</p>

        <small
          style={{
            display: "block",
            textAlign: "right",
            color: "gray",
            marginTop: "5px",
          }}
        >
          {message.time}
        </small>
      </div>
    </div>
  );
}

export default MessageBubble;