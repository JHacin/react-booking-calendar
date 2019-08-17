import React, { Component } from "react";
import AnimateHeight from 'react-animate-height';
import { bookingsMappedById } from "./dummy_data";
import "./FooterBox.css";
import "./FooterItemDetails.css";

const ItemDetails = item => {
  const { title, start_time } = item.item;
  
  return (
    <div className="item-details-wrapper">
      <div className="item-details-pull-rectangle"></div>
      <div className="item-details-data">
        <span className="item-details-title">{ title }</span>
        <span className="item-details-date">{ start_time.format('D.M.YYYY, HH:mm') }</span>
        <span className="item-details-description">Lorem ipsum dolor sit amet ...</span>
      </div>
      <div className="item-details-button-wrapper">
        <ItemDetailsButton text="Edit" />
        <ItemDetailsButton text="Detail" />
        <ItemDetailsButton text="Move" />
      </div>
    </div>
  );
};

const ItemDetailsButton = props => {
  const { text } = props;
  return (
    <button className="item-details-button">{text}</button>
  );
}

export default class FooterItemDetails extends Component {
  render() {
    const { visible, selectedItemId } = this.props;
    const item = bookingsMappedById[selectedItemId];

    return (
        <AnimateHeight
          height={ visible ? 200 : 0 }
          duration={ 300 }
          className="footer-box"
          contentClassName="footer-box-content-wrapper"
        >
          {item
            ? <ItemDetails item={item} />
            : false
          }
        </AnimateHeight>
    );
  }
}