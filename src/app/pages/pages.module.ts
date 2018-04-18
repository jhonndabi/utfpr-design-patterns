import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModule } from './product/product.module';

@NgModule({
  imports: [
    CommonModule,
    ProductModule
  ],
  declarations: [],
  exports: [
    ProductModule
  ]
})
export class PagesModule { }
