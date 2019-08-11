import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./FooterMenu.css";
import "font-awesome/css/font-awesome.min.css";

const FooterMenuItem = props => {
  const { fontAwesomeClass, title, link } = props;

  return (
    <NavLink
      to={link}
      className="FooterMenu-item"
      activeClassName="active"
      exact
    >
      <i className={fontAwesomeClass}></i>
      <span>{title}</span>
    </NavLink>
  );
};

export default class FooterMenu extends Component {
  render() {
    return (
      <div className="App-FooterMenu">
        <FooterMenuItem
          fontAwesomeClass="fa fa-bed"
          title="Rooms"
          link="/rooms/"
        />
        <FooterMenuItem
          fontAwesomeClass="fa fa-calendar"
          title="Bookings"
          link="/"
        />
        <FooterMenuItem
          fontAwesomeClass="fa fa-cogs"
          title="Settings"
          link="/settings/"
        />
      </div>
    );
  }
}