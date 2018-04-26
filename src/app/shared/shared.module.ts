import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { RepositoriesModule } from './repositories/repositories.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ComponentsModule,
    RepositoriesModule
  ],
  declarations: [],
  exports: [
    ReactiveFormsModule,
    ComponentsModule,
    RepositoriesModule
  ]
})
export class SharedModule { }
