import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  /*CADASTROS*/
  {path: 'atendimentos', loadChildren: './pages/cadastros/atendimentos/atendimentos.module#AtendimentosModule'},
  {path: 'categorias', loadChildren: './pages/cadastros/categorias/categorias.module#CategoriasModule'},
  {path: 'representantes', loadChildren: './pages/cadastros/representantes/representantes.module#RepresentantesModule'},
  {path: 'empresas', loadChildren: './pages/cadastros/empresas/empresas.module#EmpresasModule'},
  {path: 'visitantes', loadChildren: './pages/cadastros/visitantes/visitantes.module#VisitantesModule'},
  {path: 'comunidades', loadChildren: './pages/cadastros/comunidades/comunidades.module#ComunidadesModule'},

  /*DOCUMENTOS*/
  {path: 'memorandos', loadChildren: './pages/documentos/memorandos/memorandos.module#MemorandosModule'},
  {path: 'oficios', loadChildren: './pages/documentos/oficios/oficios.module#OficiosModule'},
  {path: 'proposituras', loadChildren: './pages/documentos/proposituras/proposituras.module#PropositurasModule'},
  // tslint:disable-next-line: max-line-length
  {path: 'solicitacao-armazem', loadChildren: './pages/movimentacoes/solicitacao-armazem/solicitacao-armazem.module#SolicitacaoArmazemModule'},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
