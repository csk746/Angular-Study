import { Component} from '@angular/core';
import {HelloService} from "../../chap02/hello/hello.service";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent{

  welcome: string;

  constructor(private helloService:HelloService) {
    this.welcome = helloService.sayHello();
  }
}
