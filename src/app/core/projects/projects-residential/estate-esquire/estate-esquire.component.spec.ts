import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateEsquireComponent } from './estate-esquire.component';

describe('EstateEsquireComponent', () => {
  let component: EstateEsquireComponent;
  let fixture: ComponentFixture<EstateEsquireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateEsquireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateEsquireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
