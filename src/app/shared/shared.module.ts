import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoriesModule } from './repositories/repositories.module';

@NgModule({
  imports: [
    CommonModule,
    RepositoriesModule
  ],
  declarations: [],
  exports: [
    RepositoriesModule
  ]
})
export class SharedModule { }
