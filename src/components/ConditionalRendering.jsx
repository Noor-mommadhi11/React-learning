import React, { useState } from "react";

function ConditionalRendering() {
  const [isAvailable, setIsAvailable] = useState(false);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        textAlign: "center",
        padding: "30px",
        background: "#ffffff",
        borderRadius: "20px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          marginBottom: "20px",
          color: "#1e293b"
        }}
      >
         Movie Ticket Status
      </h2>

      <button
        onClick={() => setIsAvailable(!isAvailable)}
        style={{
          padding: "12px 25px",
          backgroundColor: isAvailable ? " #16a34a" : "#dc2626",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        {isAvailable ? "Book Now" : "closed"}
      </button>

      <div
        style={{
          marginTop: "25px",
          padding: "15px",
          borderRadius: "10px",
          backgroundColor: isAvailable ? "#dcfce7" : "#fee2e2"
        }}
      >
        <h3
          style={{
            margin: 0,
            color: isAvailable ? "#15803d" : "#dc2626"
          }}
        >
          {isAvailable
            ? " Tickets Available"
            : " Housefull / Booking Closed"}
        </h3>
      </div>
    </div>
  );
}

export default ConditionalRendering;