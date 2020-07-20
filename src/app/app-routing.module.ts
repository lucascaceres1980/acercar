import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'repartos',
    loadChildren: () => import('./pages/repartos/repartos.module').then( m => m.RepartosPageModule)
  },
  {
    path: 'repartos-detalle',
    loadChildren: () => import('./repartos-detalle/repartos-detalle.module').then( m => m.RepartosDetallePageModule)
  },
  {
    path: 'productos',
    loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'establecimientos',
    loadChildren: () => import('./pages/establecimientos/establecimientos.module').then( m => m.EstablecimientosPageModule)
  },
  {
    path: 'comercializadores',
    loadChildren: () => import('./pages/comercializadores/comercializadores.module').then( m => m.ComercializadoresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
