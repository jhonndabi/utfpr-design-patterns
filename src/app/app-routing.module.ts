import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: Pages.HomeComponent }, // factory dinamically create HomeComponent - AppComponent too, viewRef change dinamically
  { path: 'clube/sobre', component: Pages.SobreComponent },
  { path: 'clube/estrutura', component: Pages.EstruturaComponent },
  { path: 'clube/estatuto', component: Pages.EstatutoComponent },
  { path: 'clube/diretoria-executiva', component: Pages.DiretoriaExecutivaComponent },
  { path: 'modalidades/:modalidade', component: Pages.ModalitiesComponent },
  { path: 'atletas/declaracoes/validar-declaracao', component: Pages.ValidarDeclaracaoComponent },
  { path: 'atletas/filiacao', component: Pages.FiliacaoComponent },
  { path: 'atletas/login', component: Pages.LoginComponent },
  { path: 'area-tecnica/regulamentos', component: Pages.RegulamentosComponent },
  { path: 'area-tecnica/calendarios', component: Pages.CalendariosComponent },
  { path: 'competicoes/campeonatos', component: Pages.CampeonatosComponent },
  { path: 'competicoes/etapas', component: Pages.EtapasComponent },
  { path: 'competicoes/etapas/resultado', component: Pages.ResultadoComponent },
  { path: 'noticias', component: Pages.NoticiasComponent },
  { path: 'noticias/:id', component: Pages.InternaComponent },
  { path: 'diversos/fotos', component: Pages.FotosComponent },
  { path: 'diversos/videos', component: Pages.VideosComponent },
  { path: 'diversos/links-uteis', component: Pages.LinksUteisComponent },
  { path: 'diversos/parceiros', component: Pages.ParceirosComponent },
  { path: 'fale-conosco', component: Pages.FaleConoscoComponent },
  // { path: '**', component: Pages.Errors.NotFoundComponent },
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
