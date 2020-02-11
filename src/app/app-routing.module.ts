import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'produtos', loadChildren: './pages/cadastros/produtos/produtos.module#ProdutosModule'},
  {path: 'categorias', loadChildren: './pages/cadastros/categorias/categorias.module#CategoriasModule'},
  {path: 'representantes', loadChildren: './pages/cadastros/representantes/representantes.module#RepresentantesModule'},
  {path: 'comunidades', loadChildren: './pages/cadastros/comunidades/comunidades.module#ComunidadesModule'},
  // tslint:disable-next-line: max-line-length
  {path: 'solicitacao-armazem', loadChildren: './pages/movimentacoes/solicitacao-armazem/solicitacao-armazem.module#SolicitacaoArmazemModule'},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
