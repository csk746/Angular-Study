import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
    selector: 'car-component',
    template: `
        car component : {{s.message}} <button (click)="s.message='car'">choice</button>
    `
})
export class CarComponent implements OnInit {
    constructor(public s: SharedService) { }

    ngOnInit() { }
}