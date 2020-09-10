import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <Header></Header>
      {/* HOME */}
      <Home />
    </div>
  );
}

export default App;
