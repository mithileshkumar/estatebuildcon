import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsResidentialComponent } from './projects-residential/projects-residential.component';
import { ProjectsCommercialComponent } from './projects-commercial/projects-commercial.component';
import { ProjectsJointComponent } from './projects-joint/projects-joint.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
    {
        path: '', component: ProjectsComponent, children: [

            { path: '', redirectTo: 'commercial', pathMatch: 'full' },
            { path: 'commercial', component: ProjectsCommercialComponent },
            { path: 'residential', component: ProjectsResidentialComponent },
            { path: 'joint', component: ProjectsJointComponent },
            { path: '**', redirectTo: 'commercial', pathMatch: 'full' }

        ]
    },
]
@NgModule({
    declarations: [ProjectsComponent, ProjectsResidentialComponent, ProjectsCommercialComponent, ProjectsJointComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectsModule { }
