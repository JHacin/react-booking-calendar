import React from 'react';
import moment from 'moment';
import Timeline, { TimelineHeaders, SidebarHeader, DateHeader } from 'react-calendar-timeline';
import { rooms, bookings } from './dummyData';
import 'react-calendar-timeline/lib/Timeline.css';
import './App.css';

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
        lineHeight={100}
        itemHeightRatio={0.5}
        canMove={false}
        onItemSelect={(itemId, e, time) => { onItemSelect(itemId, e, time) }}
        onCanvasClick={(groupId, time, e) => { onCanvasClick(groupId, time, e) }}
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
