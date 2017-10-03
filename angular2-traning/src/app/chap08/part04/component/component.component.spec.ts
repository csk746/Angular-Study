import { ComponentComponent } from './component.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('Suite - Component 테스트',() => {
  let de : DebugElement;
  let component: ComponentComponent;
  let fixture: ComponentFixture<ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('spec - 컴포넌트 생성 테스트',() => expect(component).toBeDefined());

  it('spec - 컴포넌트의 템플릿 내용이 일치하는지를 테스트',() =>{
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/Hello App Component/);
  });

});