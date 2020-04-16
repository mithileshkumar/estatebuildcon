import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatePlazaComponent } from './estate-plaza.component';

describe('EstatePlazaComponent', () => {
  let component: EstatePlazaComponent;
  let fixture: ComponentFixture<EstatePlazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstatePlazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstatePlazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
