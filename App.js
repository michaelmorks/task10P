import React from "react";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>DEV@Deakin</h1>
      <p>Subscribe to stay updated with our newsletter</p>
      <Newsletter />
    </div>
  );
}

export default App;
