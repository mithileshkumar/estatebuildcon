import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateDhanguruComponent } from './estate-dhanguru.component';

describe('EstateDhanguruComponent', () => {
  let component: EstateDhanguruComponent;
  let fixture: ComponentFixture<EstateDhanguruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateDhanguruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateDhanguruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
