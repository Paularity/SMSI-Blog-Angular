import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsEquipmentComponent } from './parts-equipment.component';

describe('PartsEquipmentComponent', () => {
  let component: PartsEquipmentComponent;
  let fixture: ComponentFixture<PartsEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
