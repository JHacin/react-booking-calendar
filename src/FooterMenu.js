import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AnimateHeight from 'react-animate-height';
import "./FooterBox.css";
import "./FooterMenu.css";
import "font-awesome/css/font-awesome.min.css";

const FooterMenuItem = props => {
  const { fontAwesomeClass, title, link } = props;

  return (
    <NavLink
      to={link}
      className="footer-menu-item"
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
    const { visible } = this.props;

    return (
      <AnimateHeight
        height={ visible ? 60 : 0 }
        duration={ 300 }
        className="footer-box"
        contentClassName="footer-box-content-wrapper"
      >
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
      </AnimateHeight>
    );
  }
}