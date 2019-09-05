import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-event-thumbnail',
  template: `
    <div class="card">
    <div class="card-body">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{event.price}}</div>
      <div>
        <span>Location: {{ event.location.address }},</span>
        <span class="pad-left">{{ event.location.country }}</span>
      </div>
    </div>
  </div>
  `,
  styles: []
})

export class EventThumbnailComponent {
  // ways to cominicate between components: Input, output and template variables!
  @Input() event: any;

  constructor() { }


}
