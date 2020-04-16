import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenResidencyComponent } from './green-residency.component';

describe('GreenResidencyComponent', () => {
  let component: GreenResidencyComponent;
  let fixture: ComponentFixture<GreenResidencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenResidencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenResidencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
