import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatedRoute } from "react-router-transition";
import "./App.css";
import BookingsTimeline from "./BookingsTimeline";
import FooterMenu from "./FooterMenu";
import FooterItemDetails from "./FooterItemDetails";

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
      navbarVisible: true,
      menuDetailsVisible: false,
      selectedItemId: null
    }

    this.onTimelineItemClick = this.onTimelineItemClick.bind(this);
    this.onCanvasClick = this.onCanvasClick.bind(this);
    this.getTimelineWithProps = this.getTimelineWithProps.bind(this);
  }

  onTimelineItemClick = (itemId) => {
    this.setState({
      navbarVisible: false,
      menuDetailsVisible: true,
      selectedItemId: itemId
    });
  }

  onCanvasClick = () => {
    this.setState({
      navbarVisible: true,
      menuDetailsVisible: false,
    });
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
    const { navbarVisible, menuDetailsVisible, selectedItemId } = this.state;

    return (
      <Router className="App">
        <AnimatedRouteHOC path="/" exact component={this.getTimelineWithProps} />
        <AnimatedRouteHOC path="/rooms/" component={Rooms} />
        <AnimatedRouteHOC path="/settings/" component={Settings} />
        <FooterMenu visible={navbarVisible} />
        <FooterItemDetails visible={menuDetailsVisible} selectedItemId={selectedItemId} />
      </Router>
    );
  } 
}
