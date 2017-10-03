import { PersonService, Persons } from './person.service';

import { async, inject, TestBed } from '@angular/core/testing';

describe('Suite - PersonService 테스트',() => {
  let serivce : PersonService;

  beforeEach(async(() => {
    this.serivce = new PersonService();
    TestBed.configureTestingModule({
      providers : [PersonService]
    }).compileComponents
  }));

  it('spec - 서비스가 제대로 주입이 되었는지',
    inject([PersonService],(serivce : PersonService) => {
      expect(serivce instanceof PersonService).toBe(true);
  }));

  it('spec - 데이터의 크기가 동일한지',async(inject([],() => {
    this.serivce.getPersons().then(persons => {
      expect(persons.length).toBe(Persons.length,'should have expected no. of heroes')
    });
  })));

  it('spec - id가 1인 사람이 유비가 맞는지', async(inject([],() => {
    this.serivce.getPerson(1).then(person => {
      expect(person.name).toBe('유비');
    })
  })));

});