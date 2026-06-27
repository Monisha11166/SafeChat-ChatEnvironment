import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import NewChatModal from "./components/NewChatModal";

function Home() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        contacts={contacts}
        onSelectContact={setSelectedContact}
        onAddContact={() => setShowModal(true)}
      />

      <ChatWindow selectedContact={selectedContact} />

      <NewChatModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onAddContact={addContact}
      />
    </div>
  );
}

export default Home;