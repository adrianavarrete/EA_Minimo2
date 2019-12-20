import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoModalPageRoutingModule } from './listado-modal-routing.module';

import { ListadoModalPage } from './listado-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoModalPageRoutingModule
  ],
  declarations: [ListadoModalPage]
})
export class ListadoModalPageModule {}
