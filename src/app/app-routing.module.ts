import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => PagesModule,
  },
  // { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
