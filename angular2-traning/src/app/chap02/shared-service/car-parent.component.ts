import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
    selector: 'car-parent-component',
    template: `
        car-parent component : {{s.message}} <button (click)="s.message='car-parent'">choice</button><br>
        <car-component></car-component><br>
        <taxi-component></taxi-component>
    `
})
export class CarParentComponent  {
    constructor(public s: SharedService) {
        s.message = "hello";
     }
}