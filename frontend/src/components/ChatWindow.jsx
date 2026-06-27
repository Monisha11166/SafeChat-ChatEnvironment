import React, { useState } from "react";
import MessageBubble from "./MessageBubble";

function ChatWindow({ selectedContact }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    const userMessage = {
      text: message,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    const typedMessage = message;
    setMessage("");

    setTimeout(() => {
      const reply = {
        text: "You said: " + typedMessage,
        sender: "other",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, reply]);
    }, 1000);
  };

  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#ECE5DD",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#202C33",
          color: "white",
          padding: "15px",
        }}
      >
        {selectedContact ? (
          <>
            <h3 style={{ margin: 0 }}>{selectedContact.name}</h3>
            <small>{selectedContact.phone}</small>
          </>
        ) : (
          <h3 style={{ margin: 0 }}>SafeChat</h3>
        )}
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          overflowY: "auto",
        }}
      >
        {!selectedContact ? (
          <h2
            style={{
              textAlign: "center",
              marginTop: "180px",
              color: "#666",
            }}
          >
            Welcome to SafeChat 💬
          </h2>
        ) : messages.length === 0 ? (
          <p style={{ textAlign: "center", color: "gray" }}>
            Start a conversation...
          </p>
        ) : (
          messages.map((msg, index) => (
            <MessageBubble key={index} message={msg} />
          ))
        )}
      </div>

      {/* Input */}
      {selectedContact && (
        <div
          style={{
            display: "flex",
            padding: "10px",
            backgroundColor: "#F0F2F5",
          }}
        >
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />

          <button
            onClick={sendMessage}
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              border: "none",
              borderRadius: "20px",
              backgroundColor: "#25D366",
              color: "white",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}

export default ChatWindow;