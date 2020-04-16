import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsTowerComponent } from './rs-tower.component';

describe('RsTowerComponent', () => {
  let component: RsTowerComponent;
  let fixture: ComponentFixture<RsTowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsTowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
