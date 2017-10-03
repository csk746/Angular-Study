import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
    selector: 'taxi-component',
    template: `
        taxi component : {{s.message}} <button (click)="s.message='taxi'">choice</button>
    `
})
export class TaxiComponent implements OnInit {
    constructor(public s: SharedService) { }

    ngOnInit() { }
}