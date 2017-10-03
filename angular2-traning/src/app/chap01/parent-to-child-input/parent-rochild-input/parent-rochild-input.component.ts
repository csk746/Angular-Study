import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-rochild-input',
  templateUrl: './parent-rochild-input.component.html',
  styleUrls: ['./parent-rochild-input.component.css']
})
export class ParentRochildInputComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  fruit1 = "사과";

  fruit2(){
    return '배';
  }

  fruit3 = ['딸기','포도','참외'];

  static fruit5 = '수박';

  get fruit6(){
    return ParentRochildInputComponent.fruit5;
  }

}
