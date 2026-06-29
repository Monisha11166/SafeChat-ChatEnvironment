import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";

function ChatWindow({ messages }) {
  const bottomRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      style={{
        flex: 1,
        overflowY: "auto",
        padding: "20px",
        backgroundColor: "#efeae2",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {messages.map((msg) => (
        <MessageBubble
          key={msg.id}
          sender={msg.sender}
          message={msg.message}
          time={msg.time}
          delivered={msg.delivered}
          read={msg.read}
        />
      ))}

      <div ref={bottomRef}></div>
    </div>
  );
}

export default ChatWindow;