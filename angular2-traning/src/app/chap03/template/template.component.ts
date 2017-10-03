import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  // templateUrl: require('./template.component.html'),
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { }
  imageUrl = "./error.png"  
  name = 'lee'
  status = "status"
  my:Object={
    alias:'happy'
  }
  ngOnInit() {
  }
  onSave(){

  }
}
