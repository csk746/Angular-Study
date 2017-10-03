import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference-component',
  templateUrl: './reference-component.component.html',
  styleUrls: ['./reference-component.component.css']
})
export class ReferenceComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private get init():any{
    return {num1:10, num2:20}
  }
}
