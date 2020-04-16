import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPhilosophyComponent } from './about-philosophy.component';

describe('AboutPhilosophyComponent', () => {
  let component: AboutPhilosophyComponent;
  let fixture: ComponentFixture<AboutPhilosophyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPhilosophyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPhilosophyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
