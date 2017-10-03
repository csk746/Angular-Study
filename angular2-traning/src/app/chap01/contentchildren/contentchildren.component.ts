import { Component ,ContentChildren ,Directive ,Input ,QueryList } from '@angular/core';

@Directive({selector:'word'})
export class Word {
  @Input() value:string;
}

@Component({
  selector: 'word-group',
  template: '{{words}}'
})
export class WordGroup{
  @ContentChildren(Word) word:QueryList<Word>;
  get words():string {return this.word ? this.word.map(w => w.value).join(', '):'';}
}


@Component({
  selector: 'app-contentchildren',
  templateUrl: './contentchildren.component.html',
  styleUrls: ['./contentchildren.component.css']
})
export class ContentchildrenComponent {
  cnt:number = 0;

  add() {
    if (this.cnt === 4) {
      this.cnt = 0;
    } else {
      this.cnt++;
    }
  }
}
