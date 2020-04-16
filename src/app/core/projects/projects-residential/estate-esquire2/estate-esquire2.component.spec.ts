import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateEsquire2Component } from './estate-esquire2.component';

describe('EstateEsquire2Component', () => {
  let component: EstateEsquire2Component;
  let fixture: ComponentFixture<EstateEsquire2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateEsquire2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateEsquire2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
