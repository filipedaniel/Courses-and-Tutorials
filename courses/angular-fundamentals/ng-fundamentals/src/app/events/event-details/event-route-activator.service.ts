import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {

  constructor(
    private eventService: EventService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const existEvent = !!this.eventService.getEvent(+route.params['id']);
    if (!existEvent) {
      this.router.navigate(['404']);
    }
    return existEvent;
  }
}
