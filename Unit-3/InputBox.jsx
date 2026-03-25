import React, { useState } from "react";

function InputBox() {
  const [text, setText] = useState("");

  // Inline CSS objects
  const containerStyle = {
    display: "flex",
    flexDirection: "column",  // Stack elements vertically
    justifyContent: "center", // Center vertically
    alignItems: "center",     // Center horizontally
    height: "100vh",          // Full screen height
    backgroundColor: "#f2f2f2",
  };

  const inputStyle = {
     
    padding: "10px",
    borderRadius: "5px",
    // border: "1px solid gray",
    // width: "250px",
    textAlign: "center",
    fontSize: "16px",
  };
  return (
    <div style={containerStyle}>
      <input
         style={inputStyle}
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default InputBox;
