import React from 'react';
import moment from 'moment';
import Timeline, { TimelineHeaders, SidebarHeader, DateHeader } from 'react-calendar-timeline';
import { rooms, bookings } from './dummyData';
import 'react-calendar-timeline/lib/Timeline.css';
import './App.css';

function itemRenderer({ item, itemContext, getItemProps }) {
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
          padding: "0 6px",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        }}
      >
        {itemContext.title}
      </div>
    </div>
  );
}

function onItemSelect(itemId, e, time) {
  console.log(`clicked item with ID ${itemId}`);
}

function onCanvasClick(groupId, time, e) {
  console.log("clicked canvas");
}

function App() {
  return (
    <div>
      <Timeline
        groups={rooms}
        items={bookings}
        defaultTimeStart={moment().startOf('day').add(-3, 'day')}
        defaultTimeEnd={moment().startOf('day').add(5, 'day')}
        sidebarWidth={0}
        lineHeight={52}
        itemHeightRatio={0.5}
        canMove={false}
        itemRenderer={itemRenderer}
        onItemSelect={onItemSelect}
        onCanvasClick={onCanvasClick}
      >
        <TimelineHeaders>
          <SidebarHeader/>
          <DateHeader
            unit="month"
            labelFormat="MMMM"
          />
          <DateHeader
            unit="day"
            labelFormat="D"
          />
        </TimelineHeaders>
      </Timeline>
    </div>
  );
}

export default App;
