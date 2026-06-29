import React from "react";

function MessageBubble({
  message,
  sender,
  time,
  delivered = true,
  read = true,
}) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: sender === "me" ? "flex-end" : "flex-start",
        margin: "8px 0",
      }}
    >
      <div
        style={{
          backgroundColor: sender === "me" ? "#DCF8C6" : "#FFFFFF",
          color: "#111",
          padding: "10px 14px",
          borderRadius:
            sender === "me"
              ? "12px 12px 0px 12px"
              : "12px 12px 12px 0px",
          maxWidth: "60%",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            fontSize: "15px",
            wordWrap: "break-word",
          }}
        >
          {message}
        </div>

        <div
          style={{
            marginTop: "6px",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "4px",
            fontSize: "11px",
            color: "#667781",
          }}
        >
          <span>{time}</span>

          {sender === "me" && (
            <span
              style={{
                color: read ? "#53BDEB" : "#667781",
              }}
            >
              {delivered ? "✓✓" : "✓"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;