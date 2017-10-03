import { Component } from '@angular/core'

@Component({
    selector: 'app-custom-search',
    template:
    `
    <section>
        <input type="text" [(ngModel)]="key" placeholder="검색어를 입력해주세요">
        키 기준 :
        <select [(ngModel)]="field">
            <option value="name">이름</option>
            <option value="age">나이</option>
        </select>
        <label><input type="checkbox" [(ngModel)]="ignoreCase">대소문자 무시</label>
    </section>
    <div>
        <ol>
            <li *ngFor="let member of members | search:key:field:ignoreCase">
                {{member.name}} ({{member.age}})
            </li>
        </ol>
    </div>
    `
})
export class CustomSearchComponent {
    key = "";
    field = "name";
    ignoreCase = false;
    members: Array<any> = [
        {name:'김유신 Kim Yoo Shin',age:11},
        {name:'문무왕 Moon Moo Wang',age:27},
        {name:'원효대사 Won Hyo Dae Sa',age:37},
        {name:'혜초 Hey Cho',age:42},
        {name:'장보고 Jang Bo Go',age:58},
        {name:'대조영 Dae Jo Young',age:66},
        {name:'강감찬 Kang Kam Chan',age:90}
    ]

}