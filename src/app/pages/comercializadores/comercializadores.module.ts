import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComercializadoresPageRoutingModule } from './comercializadores-routing.module';

import { ComercializadoresPage } from './comercializadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComercializadoresPageRoutingModule
  ],
  declarations: [ComercializadoresPage]
})
export class ComercializadoresPageModule {}
