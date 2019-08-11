import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
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



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarVisible: true
    }

    this.onTimelineItemClick = this.onTimelineItemClick.bind(this);
    this.getTimelineWithProps = this.getTimelineWithProps.bind(this);
  }

  onTimelineItemClick = () => {
    this.setState({ navbarVisible: false });
  }

  onCanvasClick = () => {
    this.setState({ navbarVisible: true });
  }

  getTimelineWithProps = () => {
    return (
      <BookingsTimeline
        onItemSelectParentUpdate={this.onTimelineItemClick}
        onCanvasClickParentUpdate={this.onCanvasClick}
      />
    );
  }

  render() {
    const { navbarVisible } = this.state;

    return (
      <Router className="App">
        <AnimatedRouteHOC path="/" exact component={this.getTimelineWithProps} />
        <AnimatedRouteHOC path="/rooms/" component={Rooms} />
        <AnimatedRouteHOC path="/settings/" component={Settings} />
        <FooterMenu visible={navbarVisible} />
      </Router>
    );
  } 
}
