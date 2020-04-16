import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateEcoSymphonyComponent } from './estate-eco-symphony.component';

describe('EstateEcoSymphonyComponent', () => {
  let component: EstateEcoSymphonyComponent;
  let fixture: ComponentFixture<EstateEcoSymphonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateEcoSymphonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateEcoSymphonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
