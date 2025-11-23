import React from "react";

const Weather = () => {
  return (
    <div style={style.root}>
      <div style={style.inputRow}>
        <input style={style.input} placeholder="Enter city..." />
        <button style={style.btn}>Show</button>
      </div>

      <div className="container" style={style.container}>
        <div className="temp" style={style.temp}></div>
        <div className="humidity" style={style.humidity}></div>
        <div className="windspeed" style={style.windspeed}></div>
        <div className="countryName" style={style.countryName}></div>
        <div className="logo" style={style.logo}></div>
      </div>
    </div>
  );
};

export default Weather;

const style = {
  root: {
    padding: "5vh 10vw",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#e8f0ff",
    minHeight: "100vh",
  },

  inputRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "12px 15px",
    fontSize: "18px",
    borderRadius: "8px",
    border: "1px solid #b0c4de",
    outline: "none",
  },

  btn: {
    padding: "12px 20px",
    backgroundColor: "#4A90E2",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "0.2s",
  },

  container: {
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
    margin: "0 auto",
  },

  temp: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },

  humidity: {
    fontSize: "18px",
    color: "#555",
    padding: "8px 0",
  },

  windspeed: {
    fontSize: "18px",
    color: "#555",
    padding: "8px 0",
  },

  countryName: {
    fontSize: "22px",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "10px",
    color: "#222",
  },

  logo: {
    width: "100px",
    height: "100px",
    margin: "10px auto 0 auto",
    backgroundColor: "#eef3ff",
    borderRadius: "50%",
  },
};
