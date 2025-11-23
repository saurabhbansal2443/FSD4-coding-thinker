import React, { useState } from "react";

// To run Vite project run --> npm run build

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={style?.root}>
      {console.log("outer", count)}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={style.button}
      >
        +
      </button>
      <p style={style.p}>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        style={style?.button}
      >
        -
      </button>
    </div>
  );
};
const style = {
  root: {
    height: "50vh",
    width: "50vw",
    border: "1px solid black",
  },
  button: {
    fontSize: "2rem",
    height: 50,
    width: 100,
  },
  p: {
    fontSize: "2rem",
  },
};

export default App;
