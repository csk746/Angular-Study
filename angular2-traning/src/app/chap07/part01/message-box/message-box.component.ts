import { Component, animate, state, style, transition, trigger } from '@angular/core';

@Component({
  selector: 'app-message-box',
  animations:[trigger(
    'openClose',[
      state('close',style({height:'0px'})),
      state('open',style({height:'10px',paddingTop:'100px'})),
      transition('void => close', animate(500)),
      transition('close => open', animate(200)),
      transition('open => close', animate(300))
    ])],
  template: 
  `
    <div>
      <button (click)="expand()">열기</button>
      <button (click)="collapse()">닫기</button>
    </div>
    <div [@openClose]="state">
      Hello<br>
      Angular!
    </div>
  `
})
export class MessageBoxComponent {
  state: string;

  constructor() {this.collapse();}

  expand(){this.state = 'open';}
  collapse(){this.state = 'close';}

}