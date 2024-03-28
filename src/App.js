import React from "react";
import "./App.css";
import Connect from "./components/connect";
import Deshbord from "./components/deshbord";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Deshbord />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
