import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModule } from './product/product.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ErrorsModule } from './errors/errors.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ProductModule,
    ErrorsModule
  ],
  declarations: [],
  exports: [
    ProductModule,
    ErrorsModule
  ]
})
export class PagesModule { }
