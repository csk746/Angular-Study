import { AfterViewInit, Component, Directive, Input, ViewChild } from '@angular/core';

@Directive({selector:'item'})
export class Item {
  @Input() status:boolean;
}

@Component({
  selector: 'item-component',
  template: '<button>알림창</button>'
})
export class ItemComponent{
  display(){
    alert('ItemComponent 입니다.');
  }
}

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent {

@ViewChild(Item)
  set item(v:Item){
    setTimeout(() => {this.status = v.status},0);
  }

@ViewChild(ItemComponent) itemComponent: ItemComponent;

  isShow:boolean = true;
  status:boolean = false;

  toggle(){
    this.isShow = !this.isShow;
  }

  display(){
    this.itemComponent.display();
  }
}
