import { Component, Input, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'child-cmp',
  template: '{{getName}}'
})
export class ChildCmp {
  @Input() childname:string;

  get getName():string{
    return this.childname;
  }

  public printName() {
    console.log(this.childname);
  }
}

@Component({
  selector: 'some-cmp',
  templateUrl: './viewchildren.component.html',
  styleUrls: ['./viewchildren.component.css']
})
export class ViewchildrenComponent {
  @ViewChildren('child1,child2,child3') children:QueryList<ChildCmp>;

  ngAfterViewInit(){
    this.children.toArray().forEach((child) => child.printName())
  }
}
