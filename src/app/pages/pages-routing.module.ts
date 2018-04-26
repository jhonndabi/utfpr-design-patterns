import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ProductModule } from './product/product.module';

const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', loadChildren: () => ProductModule },
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesRoutingModule { }
