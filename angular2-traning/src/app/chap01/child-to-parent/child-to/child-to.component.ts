import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-to',
  templateUrl: './child-to.component.html',
  styleUrls: ['./child-to.component.css']
})
export class ChildToComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  active = false;
  @Output() outputProperty = new EventEmitter<boolean>();

  updateParent(active:boolean) {
    this.active = !active;
    this.outputProperty.emit(this.active);
  }



}
