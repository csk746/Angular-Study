import { Component } from '@angular/core';

@Component({
    selector : 'app-custom-replace',
    template:
    `
    <p>{{'abc123'|replace:delete_alphabet:''}}</p>
    <p>{{'abc123'|replace:delete_number:''}}</p>
    <p>{{'a@b#c$%123'|replace:delete_special_character:''}}</p>
    <p>{{'i hate you'|replace:replace_src:replace_target}}</p>
    `
})
export class CustomReplaceComponent {
    delete_alphabet = /[a-zA-Z]+/g;
    delete_number = /[0-9]+/g;
    delete_special_character = /[^\w\s]/g;

    replace_src = 'hate';
    replace_target = 'love';
}

