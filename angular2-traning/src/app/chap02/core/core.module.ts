import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from './title.component';
import { UserService, UserServiceConfig } from './user.service';

@NgModule({
    imports : [CommonModule],
    declarations : [TitleComponent],
    exports : [TitleComponent],
    providers : [UserService]
})

export class CoreModule{
    constructor(@Optional() @SkipSelf() parentModule : CoreModule){
        if(parentModule){
            throw new Error('CoreModule이 이미 로딩 되었습니다.');
        }
    }

    static forRoot(config:UserServiceConfig) : ModuleWithProviders{
        return {
            ngModule : CoreModule,
            providers : [
                { provide : UserServiceConfig, useValue : config}
            ]
        };
    }
}