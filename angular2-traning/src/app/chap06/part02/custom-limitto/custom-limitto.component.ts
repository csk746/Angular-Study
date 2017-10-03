import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-limitto',
  template:
  `
  <div> 출력개수 : 
    <select [(ngModel)]="numDisplay">
      <option *ngFor="let num of [0,1,2,3,4,5,6,7]" [value]="num">{{num}}개 출력</option>
    </select>
  </div>
  <br>
  <ol>
    <li *ngFor = "let element of elements | limitTo:numDisplay">
    {{element}}
    </li>
  </ol>
  `
})
export class CustomLimittoComponent {

  element: Array<any> = ['컴포넌트','지시자','서비스','라우터','템플릿','바인딩'];
  numDisplay = 7;
}