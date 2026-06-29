function Header() {
  return (
    <div
      style={{
        height: "70px",
        background: "#008069",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img
          src="https://i.pravatar.cc/50?img=5"
          alt="Profile"
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
          }}
        />

        <div>
          <h3 style={{ margin: 0 }}>Monisha</h3>
          <small>Last seen today at 10:30 AM</small>
        </div>
      </div>

      <div style={{ fontSize: "22px" }}>
        📞 &nbsp; 📹 &nbsp; ⋮
      </div>
    </div>
  );
}

export default Header;