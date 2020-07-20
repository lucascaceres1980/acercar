import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComercializaroresPageRoutingModule } from './comercializarores-routing.module';

import { ComercializaroresPage } from './comercializarores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComercializaroresPageRoutingModule
  ],
  declarations: [ComercializaroresPage]
})
export class ComercializaroresPageModule {}
