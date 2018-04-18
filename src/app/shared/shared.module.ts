import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RepositoriesModule } from './repositories/repositories.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RepositoriesModule
  ],
  declarations: [],
  exports: [
    RepositoriesModule
  ]
})
export class SharedModule { }
