import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i18n-plural',
  template: 
  `
    <div>
      <input type="number" [(ngModel)]="num" placeholder="숫자 입력"><br>
      {{ num | i18nPlural : mappingRules }}
    </div>
  `
})
export class I18nPluralComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  num: number =1;

  mappingRules: {[k:string]:string} = {'=0':'없음','=1':'한개','other':'# 개'};
}