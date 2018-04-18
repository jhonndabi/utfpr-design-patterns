import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRepository } from './product-repository';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ProductRepository
  ]
})
export class RepositoriesModule { }
