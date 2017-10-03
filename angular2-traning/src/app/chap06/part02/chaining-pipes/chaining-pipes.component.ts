import { Component } from '@angular/core';

@Component({
    selector : 'app-chaning-pipes',
    template:
    `
        <div>
            {{apple|uppercase|lowercase|uppercase|lowercase}}
        </div>
        <div>
            {{ ('1' | i18nSelect : fruit) | uppercase | i18nSelect:fruit | slice:0:2 }}
        </div>
    `
})
export class ChaningPipesComponent {
    apple:string = "APPLE";

    fruit: any = {
        '1':'apple',
        'APPLE':'사과입니다.'
    }
}