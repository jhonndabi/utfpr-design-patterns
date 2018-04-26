import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from './forms/forms.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  exports: [
    FormsModule
  ]
})
export class ComponentsModule { }
