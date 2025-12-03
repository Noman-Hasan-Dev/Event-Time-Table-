import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Event } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private storageKey = 'eventTimeTable';
  private eventsSubject = new BehaviorSubject<{ [key: string]: Event }>({});
  public events$: Observable<{ [key: string]: Event }> = this.eventsSubject.asObservable();

  private colors = ['#8B7355', '#A0826D', '#9B8B7E', '#B5A090'];

  constructor() {
    this.loadEvents();
    this.initializeSampleData();
  }

  private loadEvents(): void {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.eventsSubject.next(JSON.parse(saved));
    }
  }

  private initializeSampleData(): void {
    const events = this.getEvents();
    if (Object.keys(events).length === 0) {
      // Sample data matching the image
      const sampleEvents: { [key: string]: Event } = {
        'event_1': {
          id: 'event_1',
          title: 'Event2',
          venue: 'Venue2',
          startTime: '10:00',
          endTime: '10:30',
          day: 1,
          color: '#8B7355',
          date: '2024-12-01'
        },
        'event_2': {
          id: 'event_2',
          title: 'Event1',
          venue: 'Venue1',
          startTime: '09:30',
          endTime: '10:00',
          day: 1,
          color: '#A0826D',
          date: '2024-12-01'
        },
        'event_3': {
          id: 'event_3',
          title: 'Event3',
          venue: 'Venue3',
          startTime: '09:45',
          endTime: '10:00',
          day: 1,
          color: '#9B8B7E',
          date: '2024-12-01'
        }
      };
      this.saveEvents(sampleEvents);
    }
  }

  private saveEvents(events: { [key: string]: Event }): void {
    localStorage.setItem(this.storageKey, JSON.stringify(events));
    this.eventsSubject.next(events);
  }

  getEvents(): { [key: string]: Event } {
    return this.eventsSubject.value;
  }

  addEvent(event: Omit<Event, 'id' | 'color'>): void {
    const events = this.getEvents();
    const id = `event_${Date.now()}`;
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
    events[id] = { ...event, id, color };
    this.saveEvents(events);
  }

  updateEvent(id: string, event: Omit<Event, 'id'>): void {
    const events = this.getEvents();
    if (events[id]) {
      events[id] = { ...event, id };
      this.saveEvents(events);
    }
  }

  deleteEvent(id: string): void {
    const events = this.getEvents();
    delete events[id];
    this.saveEvents(events);
  }
}