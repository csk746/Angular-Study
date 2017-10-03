import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.css']
})
export class ChildToParentComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  cntClick = 0;

  active = false;

  outputEvent(active: boolean) {
      this.cntClick++;
      this.active = active;
  }
}
