import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepartosPageRoutingModule } from './repartos-routing.module';

import { RepartosPage } from './repartos.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepartosPageRoutingModule
  ],
  declarations: [RepartosPage]
})
export class RepartosPageModule {}
