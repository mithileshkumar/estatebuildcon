import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsResidentialComponent } from './projects-residential.component';

describe('ProjectsResidentialComponent', () => {
  let component: ProjectsResidentialComponent;
  let fixture: ComponentFixture<ProjectsResidentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsResidentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsResidentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
