import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Data from "./Data";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/data" element={<Data />} />
    </Routes>
  );
}

export default App;
