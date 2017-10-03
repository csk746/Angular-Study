import { Injectable } from '@angular/core';
import {ParentService} from '../oop-service/parent.service';

export interface Child {
  getData();
}

@Injectable()
export class FirstChildService implements Child {

  constructor(public parent:ParentService) { }
  
  getData() {
    return [
        {Child : 'FirstChild Service'},
        {parent:this.parent.getName()}
      ];
  }

}

@Injectable()
export class SecondChildService extends ParentService implements Child {

  getData() {
    return [
        {Child : 'secondChild Service'},
        {parent : super.getName()}
    ];
  }

}