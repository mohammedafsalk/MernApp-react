import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import CreateTrack from "./Components/CreateTrack";
import CreateUser from "./Components/CreateUser";
import trackList from "./Components/trackList";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/"  element={<trackList/>} />
          <Route path="/edit/:id" />
          <Route path="/create" element={<CreateTrack/>} />
          <Route path="/user" element={<CreateUser/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
