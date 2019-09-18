import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  template: `
    <div (click)="toggleContent()" class="well" pointable>
      <h4 class="well-title">{{title}}</h4>
      <ng-content *ngIf="visible"></ng-content>
  </div>
  `
})

export class CollapsibleWellComponent implements OnInit {
  @Input() title: string;
  visible: boolean = true;

  constructor() { }

  ngOnInit() { }

  toggleContent() {
    this.visible = !this.visible;
  }
}
