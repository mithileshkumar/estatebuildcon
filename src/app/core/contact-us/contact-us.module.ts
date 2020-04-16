import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactUsComponent } from './contact-us.component'
const routes: Routes = [
    { path: '', component: ContactUsComponent }
]
@NgModule({
    declarations: [ContactUsComponent],
    imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactUsModule { }