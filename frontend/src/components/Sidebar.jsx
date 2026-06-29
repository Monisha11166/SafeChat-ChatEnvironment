import React, { useState } from "react";

function Sidebar({
  contacts = [
    {
      id: 1,
      name: "Monisha",
      phone: "9876543210",
      profilePic: "https://i.pravatar.cc/150?img=5",
      online: true,
    },
    {
      id: 2,
      name: "Sushma",
      phone: "9876501234",
      profilePic: "https://i.pravatar.cc/150?img=6",
      online: false,
    },
    {
      id: 3,
      name: "Rahul",
      phone: "9123456789",
      profilePic: "https://i.pravatar.cc/150?img=7",
      online: true,
    },
  ],
  onSelectContact = () => {},
  onAddContact = () => {},
}) {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(1);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        width: "30%",
        minWidth: "320px",
        maxWidth: "380px",
        height: "100vh",
        backgroundColor: "#202C33",
        color: "white",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #374045",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "15px",
          backgroundColor: "#111B21",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>💬 SafeChat</h2>

        <button
          onClick={onAddContact}
          style={{
            backgroundColor: "#25D366",
            color: "white",
            border: "none",
            padding: "8px 15px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          + Chat
        </button>
      </div>

      {/* Search */}
      <div style={{ padding: "12px" }}>
        <input
          type="text"
          placeholder="Search or start new chat"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "20px",
            border: "none",
            outline: "none",
            backgroundColor: "#2A3942",
            color: "white",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Contacts */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
        }}
      >
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            onClick={() => {
              setSelectedId(contact.id);
              onSelectContact(contact);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px",
              cursor: "pointer",
              backgroundColor:
                selectedId === contact.id ? "#2A3942" : "transparent",
              borderBottom: "1px solid #374045",
            }}
          >
            {/* Profile Picture */}
            <div style={{ position: "relative" }}>
              <img
                src={contact.profilePic}
                alt={contact.name}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />

              {contact.online && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 2,
                    right: 2,
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#25D366",
                    border: "2px solid #202C33",
                  }}
                />
              )}
            </div>

            {/* Contact Info */}
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: "17px",
                }}
              >
                {contact.name}
              </h3>

              <small style={{ color: "#B0BEC5" }}>
                {contact.online ? "🟢 Online" : contact.phone}
              </small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;