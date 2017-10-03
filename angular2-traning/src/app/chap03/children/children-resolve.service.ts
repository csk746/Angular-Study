import {Injectable} from "@angular/core";
export class Children {
  constructor(public id: number, public name: string){}
}
const CHILDREN = [
  new Children(1, '첫 번째 페이지'),
  new Children(2, '두 번째 페이지'),
  new Children(3, '세 번째 페이지')
];

export let childrenPromise = Promise.resolve(CHILDREN);

@Injectable()
export class ChildrenService {
  static nextId = 10;
  findById(id: number | string) {
    return childrenPromise
      .then(children => children.find(children => children.id === +id));
  }
}
