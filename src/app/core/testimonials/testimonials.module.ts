import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialsComponent } from './testimonials.component'
const routes: Routes = [
    { path: '', component: TestimonialsComponent }
]
@NgModule({
    declarations: [TestimonialsComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestimonialsModule { }