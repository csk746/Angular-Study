import { Component} from '@angular/core';
import {FirstChildService, SecondChildService} from "../import-service/child.service";

@Component({
    selector: 'oop-cmp',
    template: `
        <b>Constructor injection method</b><br>
        {{firstChildData | json}}<br><br>
        <b>Inheritance method<b><br>
        {{secondChildData | json}}
    `,
    providers:[FirstChildService,SecondChildService]
})
export class OopComponent {
    firstChildData:Array<Object>;
    secondChildData:Array<Object>;
    constructor(firstChildService:FirstChildService, secondChildService:SecondChildService) {
        this.firstChildData = firstChildService.getData();
        this.secondChildData = secondChildService.getData();
    }
}
