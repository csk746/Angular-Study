import { Component, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector : 'app-title',
    templateUrl : './title.component.html',
})

export class TitleComponent{
    @Input() title = '';
    user = '';

    constructor(userService : UserService){
        this.user = userService.nickName;
    }
}
