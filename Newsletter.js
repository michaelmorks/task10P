import React, { useState } from "react";
import axios from "axios";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/subscribe", { email }); // use proxy or full backend URL

      if (response.status === 200) {
        setMessage("🎉 Welcome email sent successfully!");
        setEmail(""); // clear input
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to subscribe. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "left" }}>
      <form onSubmit={handleSubscribe} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          style={{ padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer" }}
        >
          Subscribe
        </button>
      </form>
      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
}
