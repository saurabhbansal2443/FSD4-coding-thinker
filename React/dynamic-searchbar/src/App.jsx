import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState([]);
  

  async function fetchApi() {
    if (searchQuery.trim().length === 0) return;
    let apiData = await fetch(
      `https://dummyjson.com/products/search?q=${searchQuery}`
    );
    let response = await apiData.json();
    console.log(response);
    setSearchSuggestion(response.products);
  }
  useEffect(() => {
    setTimeout(() => {
      fetchApi();
    }, 500);
  }, [searchQuery]);
  return (
    <div style={styles.container}>
      <input
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        type="text"
        placeholder="Search anything..."
        style={styles.input}
      />

      <div className="suggestionConatiner" style={styles.suggestionContainer}>
        {searchSuggestion.map((obj) => (
          <div className="suggestion" style={styles.suggestion}>
            <p style={styles.text}>{obj.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
const styles = {
  container: {
    width: "100%",
    maxWidth: "400px",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    transition: "all 0.2s ease",
  },
  inputFocus: {
    borderColor: "#4A90E2",
    boxShadow: "0 0 0 3px rgba(74,144,226,0.25)",
  },
  suggestionContainer: {
    marginTop: "8px",
    width: "100%",
    background: "#fff",
    borderRadius: "8px",
    border: "1px solid #e1e1e1",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
    overflow: "hidden",
  },
  suggestion: {
    padding: "12px 16px",
    cursor: "pointer",
    transition: "background 0.2s ease",
  },
  suggestionHover: {
    background: "#f5f5f5",
  },
  text: {
    margin: 0,
    fontSize: "15px",
    color: "#333",
  },
};
