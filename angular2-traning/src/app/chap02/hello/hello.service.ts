import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {
  sayHello(){
    return "Hello Service";
  }
}
