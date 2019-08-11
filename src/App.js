import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatedRoute } from "react-router-transition";
import "./App.css";
import BookingsTimeline from "./BookingsTimeline";
import FooterMenu from "./FooterMenu";

function Rooms() {
  return <div>Rooms</div>
}

function Settings() {
  return <div>Settings</div>
}

function AnimatedRouteHOC(props) {
  const { path, exact, component } = props;

  const atEnterOrLeave = { opacity: 0 };
  const atActive = { opacity: 1 };
  const className = "switch-wrapper";

  return (
    <AnimatedRoute
      atEnter={atEnterOrLeave}
      atLeave={atEnterOrLeave}
      atActive={atActive}
      className={className}
      path={path}
      exact={exact}
      component={component}
    />
  );
}

function App() {
  

  return (
    <Router>
      <div className="App">
        <AnimatedRouteHOC path="/" exact component={BookingsTimeline} />
        <AnimatedRouteHOC path="/rooms/" component={Rooms} />
        <AnimatedRouteHOC path="/settings/" component={Settings} />
        <FooterMenu />
      </div>
    </Router>
  );
}

export default App;
