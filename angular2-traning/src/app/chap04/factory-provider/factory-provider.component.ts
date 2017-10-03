
import {Component} from "@angular/core";
import {FactoryProvider} from "./car.service.provider";
import {CarService} from "./car.service";
@Component({
  selector: 'app-factory-provider',
  template: `
<div>엔진이름 : {{carService.engine.name}}</div>
<div>현재속도 : {{carService.speedmeter.speed}}</div>
<div>최대속도 : {{carService.speedmeter.maxSpeed}}</div>
`,
  providers: [FactoryProvider]
})

export class FactoryProviderComponent {
  constructor(public carService: CarService) {}
}
