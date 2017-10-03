import { Directive } from '@angular/core'

@Directive({
    selector : '[my-click]',
    host : {'(click)':'onClick()'}
})
export class MyClickSomeDirective {
    onClick() {
        alert('hello');
    }
}