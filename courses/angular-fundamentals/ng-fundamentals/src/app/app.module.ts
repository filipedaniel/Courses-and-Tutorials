import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  EventRouteActivatorService,
  EventsListResolverService,
  EventCreateComponent
} from './events/index';
import { AppRoutes } from './app-routing';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';


@NgModule({
  // add a components pipes or directive
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    EventCreateComponent,
    Error404Component
  ],
  // import other modules
  // importing a modules makes all yours exports declarations available on this one
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  // import services
  providers: [
    EventService,
    ToastrService,
    EventRouteActivatorService,
    { provide: 'canDeactivateCreatEvent', useValue: checkDirtyState },
    EventsListResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: EventCreateComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do really want to cancel?');
  }
  return true;
}
