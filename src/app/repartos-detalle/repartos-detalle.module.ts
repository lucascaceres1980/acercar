import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepartosDetallePageRoutingModule } from './repartos-detalle-routing.module';

import { RepartosDetallePage } from './repartos-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepartosDetallePageRoutingModule
  ],
  declarations: [RepartosDetallePage]
})
export class RepartosDetallePageModule {}
