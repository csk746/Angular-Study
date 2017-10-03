import { Animal, Config } from './animal';

abstract class Factory {

  create() {
     return this.careteAnimal(new Config());
  }
  abstract careteAnimal(Config): Animal;
}

export class AnimalFactory extends Factory{

  careteAnimal(config:Config){        
    config.bark="야옹야옹";
    config.name="고양이";
    return new Animal(config);
  }
}

export function mainFactory() {
  let myAnimal:Animal= (new AnimalFactory()).create();
  return myAnimal;
}