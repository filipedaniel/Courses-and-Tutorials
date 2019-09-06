import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from '../common/toastr.service';

@Component({
  selector: 'app-create-event',
  template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-6">
      <h3>[Create Event Form will go here]</h3>
      <br>
      <br>
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-danger" (click)="cancel()">Cancel</button>
    </div>
  `
})

export class EventCreateComponent implements OnInit {
  isDirty: boolean = true;
  constructor(
    private router: Router) { }

  ngOnInit() { }

  cancel() {
    this.router.navigate(['/events']);
  }

  // eventNotSave() {
  //   console.log("AAA");
  //   this.toastrService.error('You have not saved this event, do you really want to cancel?');
  // }
}
