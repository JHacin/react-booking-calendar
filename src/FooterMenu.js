import React, { Component } from 'react';
import './FooterMenu.css';
import 'font-awesome/css/font-awesome.min.css';

const FooterMenuItem = props => {
  const { iconName, title, isActive } = props;

  return (
    <div
      className={`FooterMenu-item ${isActive && "active"}`}
      onClick={() => { alert("Menu link clicked."); }}
    >
      <i className={`fa fa-${iconName}`}></i>
      <span>{title}</span>
    </div>
  );
};

export default class FooterMenu extends Component {
  render() {
    return (
      <div className="App-FooterMenu">
        <FooterMenuItem
          iconName="bed"
          title="Rooms"
        />
        <FooterMenuItem
          iconName="calendar"
          title="Bookings"
          isActive={true}
        />
        <FooterMenuItem
          iconName="cogs"
          title="Settings"
        />
      </div>
    );
  }
}