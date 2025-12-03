import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EventService } from './event.service';
import { Event, Day, Venue } from './event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('timeColumn') timeColumn!: ElementRef;
  @ViewChild('contentArea') contentArea!: ElementRef;
  @ViewChild('venueBar') venueBar!: ElementRef;

  selectedDay = 0;
  venues: Venue[] = [];
  venueWidth = 200;
  timeSlots: string[] = [];
  daysOfWeek: Day[] = [];
  events: { [key: string]: Event } = {};
  
  showDialog = false;
  editingEventId: string | null = null;
  formData = {
    title: '',
    venue: '',
    startTime: '09:00',
    endTime: '10:00',
    day: 0,
    date: ''
  };

  constructor(private eventService: EventService) {
    this.generateTimeSlots();
    this.daysOfWeek = this.getDaysOfWeek();
    this.venues = this.getVenues();
    if (this.venues.length > 0) {
      this.formData.venue = this.venues[0].name;
    }
  }

  ngOnInit(): void {
    this.eventService.events$.subscribe(events => {
      this.events = events;
    });
  }

  ngAfterViewInit(): void {
    if (this.contentArea && this.timeColumn) {
      this.contentArea.nativeElement.addEventListener('scroll', () => {
        this.timeColumn.nativeElement.scrollTop = this.contentArea.nativeElement.scrollTop;
      });
    }
  }

  private generateTimeSlots(): void {
    for (let i = 0; i < 96; i++) {
      const hour = Math.floor(i / 4);
      const minute = (i % 4) * 15;
      this.timeSlots.push(
        `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      );
    }
  }

  private getDaysOfWeek(): Day[] {
    const days: Day[] = [];
    const today = new Date();
    const dayOfWeek = today.getDay();
    const monday = new Date(today);
    monday.setDate(today.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1));

    for (let i = 0; i < 7; i++) {
      const day = new Date(monday);
      day.setDate(monday.getDate() + i);
      const dateStr = day.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      days.push({
        name: day.toLocaleDateString('en-US', { weekday: 'short' }),
        date: dateStr,
        fullDate: day.toISOString().split('T')[0]
      });
    }
    return days;
  }

  private getVenues(): Venue[] {
    const baseDate = '2024-12-01';
    return [
      { name: 'Venue1', date: `Date: ${baseDate}` },
      { name: 'Venue2', date: `Date: ${baseDate}` },
      { name: 'Venue3', date: `Date: ${baseDate}` },
      { name: 'Venue4', date: `Friday\nDate: ${baseDate}` },
      { name: 'Venue5', date: `Date: ${baseDate}` }
    ];
  }

  onTabChange(index: number): void {
    this.selectedDay = index;
  }

  timeToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  calculateEventHeight(startTime: string, endTime: string): number {
    const startMinutes = this.timeToMinutes(startTime);
    const endMinutes = this.timeToMinutes(endTime);
    const duration = endMinutes - startMinutes;
    return (duration / 15) * 60;
  }

  calculateEventTop(startTime: string): number {
    const startMinutes = this.timeToMinutes(startTime);
    return (startMinutes / 15) * 60;
  }

  getEventsForVenue(venue: string, day: number): Event[] {
    return Object.values(this.events).filter(
      event => event.venue === venue && event.day === day
    );
  }

  openAddDialog(): void {
    this.editingEventId = null;
    this.formData = {
      title: '',
      venue: this.venues[0].name,
      startTime: '09:00',
      endTime: '10:00',
      day: this.selectedDay,
      date: this.daysOfWeek[this.selectedDay].fullDate
    };
    this.showDialog = true;
  }

  openEditDialog(event: Event): void {
    this.editingEventId = event.id;
    this.formData = {
      title: event.title,
      venue: event.venue,
      startTime: event.startTime,
      endTime: event.endTime,
      day: event.day,
      date: event.date
    };
    this.showDialog = true;
  }

  closeDialog(): void {
    this.showDialog = false;
    this.editingEventId = null;
  }

  saveEvent(): void {
    if (!this.formData.title || 
        this.timeToMinutes(this.formData.endTime) <= this.timeToMinutes(this.formData.startTime)) {
      alert('Please fill all fields correctly and ensure end time is after start time');
      return;
    }

    if (this.editingEventId) {
      const existingEvent = this.events[this.editingEventId];
      this.eventService.updateEvent(this.editingEventId, {
        ...this.formData,
        color: existingEvent.color
      });
    } else {
      this.eventService.addEvent(this.formData);
    }

    this.closeDialog();
  }

  deleteEvent(eventId: string, event: MouseEvent): void {
    event.stopPropagation();
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventService.deleteEvent(eventId);
    }
  }
}