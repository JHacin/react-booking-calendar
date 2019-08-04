import moment from 'moment';

export const groups = [
  {
    id: 1,
    title: 'Room 1'
  },
  {
    id: 2,
    title: 'Room 2'
  },
  {
    id: 3,
    title: 'Room 3'
  },
  {
    id: 4,
    title: 'Room 4'
  },
  {
    id: 5,
    title: 'Room 5'
  },
  {
    id: 6,
    title: 'Room 6'
  },
  {
    id: 7,
    title: 'Room 7'
  },
  {
    id: 8,
    title: 'Room 8'
  },
  {
    id: 9,
    title: 'Room 9'
  },
  {
    id: 10,
    title: 'Room 10'
  }
];

export const items = [
  {
    id: 1,
    group: 1,
    title: 'John Doe',
    start_time: moment().add(-1, 'day'),
    end_time: moment().add(1, 'day'),
  },
  {
    id: 2,
    group: 2,
    title: 'Jane Doe',
    start_time: moment().add(1, 'day'),
    end_time: moment().add(3, 'day'),
  },
  {
    id: 3,
    group: 2,
    title: 'John Doe',
    start_time: moment().add(4, 'day'),
    end_time: moment().add(6, 'day'),
  },
  {
    id: 4,
    group: 3,
    title: 'Jane Doe',
    start_time: moment().add(0, 'day'),
    end_time: moment().add(4, 'day'),
  },
  {
    id: 5,
    group: 3,
    title: 'John Doe',
    start_time: moment().add(5, 'day'),
    end_time: moment().add(9, 'day'),
  },
  {
    id: 6,
    group: 4,
    title: 'Jane Doe',
    start_time: moment().add(-2, 'day'),
    end_time: moment().add(6, 'day'),
  },
  {
    id: 7,
    group: 5,
    title: 'John Doe',
    start_time: moment().add(0.5, 'day'),
    end_time: moment().add(3.5, 'day'),
  },
  {
    id: 8,
    group: 6,
    title: 'Jane Doe',
    start_time: moment().add(-0.25, 'day'),
    end_time: moment().add(3.25, 'day'),
  },
  {
    id: 9,
    group: 6,
    title: 'John Doe',
    start_time: moment().add(4.5, 'day'),
    end_time: moment().add(6, 'day'),
  },
  {
    id: 10,
    group: 7,
    title: 'Jane Doe',
    start_time: moment().add(-0.5, 'day'),
    end_time: moment().add(7, 'day'),
  },
  {
    id: 11,
    group: 8,
    title: 'John Doe',
    start_time: moment().add(-2, 'day'),
    end_time: moment().add(-1, 'day'),
  },
  {
    id: 12,
    group: 8,
    title: 'John Doe',
    start_time: moment().add(0.25, 'day'),
    end_time: moment().add(1.75, 'day'),
  },
  {
    id: 13,
    group: 8,
    title: 'Jane Doe',
    start_time: moment().add(2.75, 'day'),
    end_time: moment().add(6, 'day'),
  },
  {
    id: 14,
    group: 10,
    title: 'John Doe',
    start_time: moment().add(2, 'day'),
    end_time: moment().add(10, 'day'),
  }
];