import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangalTowerComponent } from './mangal-tower.component';

describe('MangalTowerComponent', () => {
  let component: MangalTowerComponent;
  let fixture: ComponentFixture<MangalTowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangalTowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangalTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
