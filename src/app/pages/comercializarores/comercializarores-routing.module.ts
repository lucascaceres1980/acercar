import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComercializaroresPage } from './comercializarores.page';

const routes: Routes = [
  {
    path: '',
    component: ComercializaroresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComercializaroresPageRoutingModule {}
