import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkydaleComponent } from './skydale.component';

describe('SkydaleComponent', () => {
  let component: SkydaleComponent;
  let fixture: ComponentFixture<SkydaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkydaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkydaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
