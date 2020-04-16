import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateEmeraldComponent } from './estate-emerald.component';

describe('EstateEmeraldComponent', () => {
  let component: EstateEmeraldComponent;
  let fixture: ComponentFixture<EstateEmeraldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateEmeraldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateEmeraldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
