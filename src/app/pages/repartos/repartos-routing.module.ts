import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepartosPage } from './repartos.page';

const routes: Routes = [
  {
    path: '',
    component: RepartosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepartosPageRoutingModule {}
