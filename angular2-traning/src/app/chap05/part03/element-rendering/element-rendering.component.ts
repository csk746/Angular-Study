import { Component} from '@angular/core';
import { Directive, ElementRef, Renderer} from '@angular/core';

@Directive({selector:'[my-element-ref]'})
export class MyElementRef{
  constructor(public el:ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'orange';
  }
}

@Directive({selector:'[my-renderer]'})
export class MyRenderer{
  constructor(public el:ElementRef, public renderer:Renderer) {
    this.renderer.setElementStyle(el.nativeElement,'background','aqua');
  }
}

@Component({
  selector: 'app-element-rendering',
  template: 
  `
    <div my-element-ref>1. nativeElement 방식</div>
    <div my-renderer>1. renderer 방식</div>
  `
})

export class ElementRenderingComponent{}
