import {Injectable} from '@angular/core';
import {USER} from './mock-user';

export interface DataServiceStructure{
    getUser();
}

@Injectable()
export class MockService implements DataServiceStructure {
    getUser(){
        return USER;
    }
}