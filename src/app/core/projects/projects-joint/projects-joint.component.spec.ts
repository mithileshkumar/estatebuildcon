import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsJointComponent } from './projects-joint.component';

describe('ProjectsJointComponent', () => {
  let component: ProjectsJointComponent;
  let fixture: ComponentFixture<ProjectsJointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsJointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsJointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
