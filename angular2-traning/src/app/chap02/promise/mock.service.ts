import { Injectable } from '@angular/core';
import { USERS } from './mock-user';
import { User } from './user';

@Injectable()
export class MockService {
    getUser():Promise<User[]> {
        return Promise.resolve(USERS);
    }

    getUserDelay():Promise<User[]> {
        return new Promise<User[]>(resolve => setTimeout(resolve, 1000)).then(()=>this.getUser());
    }

    getRequest(status:boolean):Promise<string> {
        if (status === true) {
            return Promise.resolve('accept the request')
                          .then(function(reason) {
                                    return reason;
                                }, function (reason) {
                                    return "NO";
                                }
                            );
        } else {
            return Promise.reject('deny the request')
                          .then(function(reason) {
                                    return "YES";
                                }, function (reason) {
                                    return reason;
                                }
                            );
        }
    }
}