import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateListComponent } from './template-list/template-list.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TemplateListComponent, TemplateComponent],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    TemplateListComponent
  ],
  entryComponents: [
    TemplateListComponent
  ]
})
export class TemplateModule { }
