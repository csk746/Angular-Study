import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  template: `
    <button my-click>onClick()</button>
  `
})
export class CustomDirectiveComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
}
