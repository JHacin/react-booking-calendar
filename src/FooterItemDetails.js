import React, { Component } from "react";
import AnimateHeight from 'react-animate-height';
import { bookingsMappedById } from "./dummy_data";
import "./FooterBox.css";
import "./FooterItemDetails.css";

const ItemDetails = item => {
  const { title, start_time } = item.item;
  
  return (
    <div className="item-details-wrapper">
      <span>{ title }</span>
      <span><strong>{ start_time.format('D.M.YYYY, HH:mm') }</strong></span>
      <span>Lorem ipsum dolor sit amet ...</span>
      <div className="item-details-buttons">
        <button>Edit</button>
        <button>Detail</button>
        <button>Remove</button>
      </div>
    </div>
  );
};

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