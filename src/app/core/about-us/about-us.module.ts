import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutPhilosophyComponent } from './about-philosophy/about-philosophy.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutProfileComponent } from './about-profile/about-profile.component';
import { AboutUsComponent } from './about-us.component';

const routes: Routes = [
    {
        path: '', component: AboutUsComponent, children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'profile', component: AboutProfileComponent },
            { path: 'philosophy', component: AboutPhilosophyComponent },
            { path: 'team', component: AboutTeamComponent },
            { path: '**', redirectTo: 'profile', pathMatch: 'full' }
        ]
    }];

@NgModule({
    declarations: [AboutUsComponent, AboutPhilosophyComponent, AboutTeamComponent, AboutProfileComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutUsModule { }