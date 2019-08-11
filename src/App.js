import React from "react";
import { Br} from "react-router-dom";
import "./App.css";
import BookingsTimeline from "./BookingsTimeline";
import FooterMenu from "./FooterMenu";

function App() {
  return (
    <div className="App">
      <BookingsTimeline />
      <FooterMenu />
    </div>
  );
}

export default App;
