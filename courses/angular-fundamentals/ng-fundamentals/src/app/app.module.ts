import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';

@NgModule({
  // add a components pipes or directive
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent
  ],
  // import other modules
  // importing a modules makes all yours exports declarations available on this one
  imports: [
    BrowserModule
  ],
  // import services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }