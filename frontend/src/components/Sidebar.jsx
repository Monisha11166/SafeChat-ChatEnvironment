import React, { useState } from "react";

function Sidebar({ contacts, onSelectContact, onAddContact }) {
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        width: "30%",
        height: "100vh",
        backgroundColor: "#202c33",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "15px",
          backgroundColor: "#111b21",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>SafeChat</h3>

        <button
          onClick={onAddContact}
          style={{
            background: "#25D366",
            color: "white",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          + New Chat
        </button>
      </div>

      {/* Search */}
      <div style={{ padding: "10px" }}>
        <input
          type="text"
          placeholder="Search Contact..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "20px",
            border: "none",
            outline: "none",
          }}
        />
      </div>

      {/* Contact List */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {filteredContacts.length === 0 ? (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No Contacts Found
          </p>
        ) : (
          filteredContacts.map((contact, index) => (
            <div
              key={index}
              onClick={() => onSelectContact(contact)}
              className="contact"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  backgroundColor: "#25D366",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {contact.name.charAt(0).toUpperCase()}
              </div>

              <div>
                <h4 style={{ margin: 0 }}>{contact.name}</h4>
                <small>{contact.phone}</small>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Sidebar;