import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenViewHeightsComponent } from './green-view-heights.component';

describe('GreenViewHeightsComponent', () => {
  let component: GreenViewHeightsComponent;
  let fixture: ComponentFixture<GreenViewHeightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenViewHeightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenViewHeightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
