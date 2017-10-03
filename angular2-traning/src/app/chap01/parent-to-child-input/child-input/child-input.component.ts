import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  @Input() name1: string;
  @Input() name2: string;
  @Input() name3: string;
  @Input() name4: string;
  @Input() name5: string;
  @Input() name6: string;

}
