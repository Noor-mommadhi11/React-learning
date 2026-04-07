import React, { useState } from "react";

function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    if (email && password) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter email and password");
    }
  };

  const handleSignOut = () => {
    setEmail("");
    setPassword("");
    setIsLoggedIn(false);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "80px auto",
        padding: "30px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        borderRadius: "15px",
        textAlign: "center",
        background: "#fff"
      }}
    >
      {!isLoggedIn ? (
        <>
          <h2>Sign In</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              borderRadius: "8px",
              border: "1px solid black"
            }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              margin: "10px 0",
              borderRadius: "8px",
              border: "1px solid #ccc"
            }}
          />

          <button
            onClick={handleSignIn}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "yellow",
              color: "black",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Sign In
          </button>
        </>
      ) : (
        <>
          <h2>Welcome </h2>
          <p>{email}</p>

          <button
            onClick={handleSignOut}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#dc2626",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Sign Out
          </button>
        </>
      )}
    </div>
  );
}

export default SignInPage;