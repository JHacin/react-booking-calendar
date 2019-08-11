import React, { Component } from "react";
import moment from "moment";
import "moment/locale/sl";
import Timeline, { TimelineHeaders, SidebarHeader, DateHeader } from "react-calendar-timeline";
import { rooms, bookings } from "./dummy_data";
import "react-calendar-timeline/lib/Timeline.css";
import "./BookingsTimeline.css";

export default class BookingsTimeline extends Component {
  constructor(props) {
    super(props);

    this.isWeekendDay = this.isWeekendDay.bind(this);
    this.isCurrentDay = this.isCurrentDay.bind(this);
    this.onItemSelect = this.onItemSelect.bind(this);
    this.onCanvasClick = this.onCanvasClick.bind(this);
    this.itemRenderer = this.itemRenderer.bind(this);
    this.intervalRenderer = this.intervalRenderer.bind(this);
  }

  isWeekendDay = (intervalContext, data) => {
    if (data.isMonth) {
      return false;
    }
    const day = intervalContext.interval.startTime.day();
    return day === 6 || day === 0; // Saturday or Sunday
  };

  isCurrentDay = (intervalContext, data) => {
    return !data.isMonth && intervalContext.interval.startTime.isSame(data.currentDate, "day");
  };

  onItemSelect = (itemId, e, time, onItemSelectParentUpdate) => {
    onItemSelectParentUpdate();
  };

  onCanvasClick = (groupId, time, e, onCanvasClickParentUpdate) => {
    onCanvasClickParentUpdate();
  };

  itemRenderer = ({ item, itemContext, getItemProps }) => {
    return (
      <div
        {...getItemProps({
          style: {
            display: "flex",
            alignItems: "center",
            background: item.start_time.isAfter() ? "#aaa" : "#d32f2f",
            border: `3px solid ${ itemContext.selected ? "#fff700" : "transparent"}`,
            borderRadius: "12.5px",
            boxShadow: "rgba(0, 0, 0, 0.16) 0 3px 6px",
          }
        })}
      >
        <div
          style={{
            position: "sticky",
            left: "0px",
            display: "inline-block",
            overflow: "hidden",
            padding: "0 10px",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          }}
        >
          {itemContext.title}
        </div>
      </div>
    );
  };

  intervalRenderer = ({ intervalContext, getIntervalProps, data }) => {
    return (
      <div
        {...getIntervalProps()}
        className={`rct-dateHeader ${ data.isMonth ? "rct-dateHeader-primary" : ""}`}
        onClick={() => { return false; }}
      >
      <span
        style={{
          position: data.isMonth ? "sticky" : "static",
          marginRight: data.isMonth ? "auto" : "inherit",
          left: "0px",
          padding: "0 10px",
          fontWeight: this.isWeekendDay(intervalContext, data) || this.isCurrentDay(intervalContext, data) ? "400" : "300",
          color: this.isCurrentDay(intervalContext, data) ? "#d32f2f" : "#000",
        }}
      >
        {intervalContext.intervalText}
      </span>
      </div>
    );
  };

  render() {
    const { onItemSelectParentUpdate, onCanvasClickParentUpdate } = this.props;
    const currentDate = moment();

    return (
      <Timeline
        groups={rooms}
        items={bookings}
        defaultTimeStart={moment().startOf("day").add(-3, "day")}
        defaultTimeEnd={moment().startOf("day").add(5, "day")}
        sidebarWidth={0}
        lineHeight={52}
        itemHeightRatio={0.5}
        canMove={false}
        itemRenderer={this.itemRenderer}
        onItemSelect={(itemId, e, time) => this.onItemSelect(itemId, e, time, onItemSelectParentUpdate)}
        onCanvasClick={(groupId, time, e) => this.onCanvasClick(groupId, time, e, onCanvasClickParentUpdate)}
      >
        <TimelineHeaders>
          <SidebarHeader/>
          <DateHeader
            unit="month"
            labelFormat="MMMM"
            headerData={{ isMonth: true }}
            intervalRenderer={this.intervalRenderer}
          />
          <DateHeader
            unit="day"
            labelFormat="D"
            headerData={{ isMonth: false, currentDate }}
            intervalRenderer={this.intervalRenderer}
          />
        </TimelineHeaders>
      </Timeline>
    );
  }
}