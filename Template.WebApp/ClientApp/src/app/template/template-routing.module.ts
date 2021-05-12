import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateComponent } from './template/template.component';


const routes: Routes = [
  { path: '', component: TemplateListComponent, pathMatch: 'full' },
  { path: 'add', component: TemplateComponent, pathMatch: 'full' },
  { path: 'edit/:id', component: TemplateComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
