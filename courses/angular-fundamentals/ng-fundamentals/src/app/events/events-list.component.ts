import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/event.model';


@Component({
  selector: 'app-event-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  public events:IEvent[];
  constructor(
    private eventService: EventService,
    private toastrService: ToastrService,
    private route: ActivatedRoute) {}


  ngOnInit() {
    //this.eventService.getEvents().subscribe((events) => this.events = events);
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }

}
