import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BookingsTimeline from "./BookingsTimeline";
import FooterMenu from "./FooterMenu";

function Rooms() {
  return <div>Rooms</div>
}

function Settings() {
  return <div>Settings</div>
}

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={BookingsTimeline} />
        <Route path="/rooms/" component={Rooms} />
        <Route path="/settings/" component={Settings} />
        <FooterMenu />
      </div>
    </Router>
  );
}

export default App;
