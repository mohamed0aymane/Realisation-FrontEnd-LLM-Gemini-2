import React, { useState } from "react";
import "./DashBoard.css";

export default function DashBoard() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const translate = async () => {
    const response = await fetch("http://localhost:8080/translator/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    const data = await response.json();
    setResult(data.translation);
  };

  return (
    <div className="dashboard-container">
      <h2>English → Darija Translator</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type English text here..."
      />

      <br />
      <button onClick={translate}>Translate</button>

      <h3>Translation:</h3>
      <p>{result}</p>
    </div>
  );
}
