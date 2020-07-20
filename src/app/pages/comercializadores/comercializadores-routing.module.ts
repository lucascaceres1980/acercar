import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComercializadoresPage } from './comercializadores.page';

const routes: Routes = [
  {
    path: '',
    component: ComercializadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComercializadoresPageRoutingModule {}
