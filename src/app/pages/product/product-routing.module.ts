import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: 'new', component: ProductCreateComponent },
      { path: 'view/:id', component: ProductDetailComponent },
      { path: 'edit/:id', component: ProductEditComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
