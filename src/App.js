import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
        <Route path="/" exact component={this.getTimelineWithProps} />
        <Route path="/rooms/" component={Rooms} />
        <Route path="/settings/" component={Settings} />
        <FooterMenu visible={navbarVisible} />
        <FooterItemDetails visible={menuDetailsVisible} selectedItemId={selectedItemId} />
      </Router>
    );
  } 
}
