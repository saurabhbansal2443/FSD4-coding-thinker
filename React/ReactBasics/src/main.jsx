import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// let h1 = <h1> I am heading tag </h1>;

function H1() { // component 
  return <h1> I am h1tag </h1>;
}

createRoot(document.getElementById("root")).render(<H1 />);
