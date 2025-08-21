import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/core/home/home.component';

//commercial
import { EstatePlazaComponent } from 'src/app/core/projects/projects-commercial/estate-plaza/estate-plaza.component';
import { MangalTowerComponent } from 'src/app/core/projects/projects-commercial/mangal-tower/mangal-tower.component';
import { RsTowerComponent } from 'src/app/core/projects/projects-commercial/rs-tower/rs-tower.component';
import { EstateDhanguruComponent } from 'src/app/core/projects/projects-commercial/estate-dhanguru/estate-dhanguru.component';

//residential
import { EstateEsquireComponent } from 'src/app/core/projects/projects-residential/estate-esquire/estate-esquire.component';
import { EstateEmeraldComponent } from 'src/app/core/projects/projects-residential/estate-emerald/estate-emerald.component';
import { EstateEsquire2Component } from 'src/app/core/projects/projects-residential/estate-esquire2/estate-esquire2.component';
import { EstateEcoSymphonyComponent } from 'src/app/core/projects/projects-residential/estate-eco-symphony/estate-eco-symphony.component';

//joint
import { GreenResidencyComponent } from 'src/app/core/projects/projects-joint/green-residency/green-residency.component';
import { GreenViewHeightsComponent } from 'src/app/core/projects/projects-joint/green-view-heights/green-view-heights.component';

import { PageNotFoundComponent } from 'src/app/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutUs', loadChildren: 'src/app/core/about-us/about-us.module#AboutUsModule' },
  { path: 'projects', loadChildren: 'src/app/core/projects/projects.module#ProjectsModule' },
  { path: 'contactUs', loadChildren: 'src/app/core/contact-us/contact-us.module#ContactUsModule' },
  { path: 'testimonials', loadChildren: 'src/app/core/testimonials/testimonials.module#TestimonialsModule' },
  { path: 'estate_plaza', component: EstatePlazaComponent },
  { path: 'mangal_tower', component: MangalTowerComponent },
  { path: 'rs_tower', component: RsTowerComponent },
  { path: 'estate_dhanguru', component: EstateDhanguruComponent },
  { path: 'estate_eco_symphony', component: EstateEcoSymphonyComponent },
  { path: 'estate_esquire', component: EstateEsquireComponent },
  { path: 'estate_esquire2', component: EstateEsquire2Component },
  { path: 'estate_emerald', component: EstateEmeraldComponent },
  { path: 'green_residency', component: GreenResidencyComponent },
  { path: 'green_view_heights', component: GreenViewHeightsComponent },
  { path: '**', component: PageNotFoundComponent }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutingComponents = [
  HomeComponent,
  PageNotFoundComponent,
  EstatePlazaComponent,
  EstateDhanguruComponent,
  RsTowerComponent,
  MangalTowerComponent,
  EstateEsquireComponent,
  EstateEmeraldComponent,
  EstateEsquire2Component,
  EstateEcoSymphonyComponent,
  GreenResidencyComponent,
  GreenViewHeightsComponent,
  EstatePlazaComponent
];
