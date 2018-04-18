import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModule } from './product/product.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ProductModule
  ],
  declarations: [],
  exports: [
    ProductModule
  ]
})
export class PagesModule { }
