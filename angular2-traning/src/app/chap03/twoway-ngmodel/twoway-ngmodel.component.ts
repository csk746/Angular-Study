import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-ngmodel',
  templateUrl: './twoway-ngmodel.component.html',
  styleUrls: ['./twoway-ngmodel.component.css']
})
export class TwowayNgmodelComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  city:string = "seoul";

  cities:Object[] = [
    {han:"서울",eng:"seoul"},
    {han:"대전",eng:"daejeon"},
    {han:"대구",eng:"daegu"},
    {han:"부산",eng:"pusan"}
  ]; 
}
