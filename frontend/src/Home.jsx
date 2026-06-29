import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";

function Home() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "other",
      message: "Hello! Welcome to SafeChat 👋",
      time: "10:20 AM",
    },
    {
      id: 2,
      sender: "me",
      message: "Hi 👋",
      time: "10:21 AM",
      delivered: true,
      read: true,
    },
  ]);

  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      sender: "me",
      message: text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      delivered: true,
      read: false,
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />

        <ChatWindow messages={messages} />

        <MessageInput onSend={handleSendMessage} />
      </div>
    </div>
  );
}

export default Home;