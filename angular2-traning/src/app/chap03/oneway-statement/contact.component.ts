import { Component,Output,EventEmitter,OnInit } from '@angular/core';

@Component({
    selector: 'contactinput',
    template: 
    `
        <div><input #contactname type="text" placeholder="이름"/></div>
        <div><input #contacttele type="text" placeholder="전화번호"/></div>
        <button (click)="handleClick(contactname.value,contacttele.value)">저장</button>
    `
})
export class ContactComponent implements OnInit {
    constructor() { }
    ngOnInit() { }

    @Output() save:EventEmitter<any> = new EventEmitter();

    public handleClick(name:string, tele:string) :void {
        this.save.next({name:name,tele:tele});
    }
}