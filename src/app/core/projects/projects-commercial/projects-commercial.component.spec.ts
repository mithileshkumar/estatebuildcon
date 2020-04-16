import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCommercialComponent } from './projects-commercial.component';

describe('ProjectsCommercialComponent', () => {
  let component: ProjectsCommercialComponent;
  let fixture: ComponentFixture<ProjectsCommercialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsCommercialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsCommercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
