import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPhilosophyComponent } from './business-philosophy.component';

describe('BusinessPhilosophyComponent', () => {
  let component: BusinessPhilosophyComponent;
  let fixture: ComponentFixture<BusinessPhilosophyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessPhilosophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
