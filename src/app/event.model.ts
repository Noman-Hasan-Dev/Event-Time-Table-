export interface Event {
  id: string;
  title: string;
  venue: string;
  startTime: string;
  endTime: string;
  day: number;
  color: string;
  date: string;
}

export interface Day {
  name: string;
  date: string;
  fullDate: string;
}

export interface Venue {
  name: string;
  date: string;
}