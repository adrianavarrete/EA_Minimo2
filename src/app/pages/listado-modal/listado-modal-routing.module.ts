import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoModalPage } from './listado-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoModalPageRoutingModule {}
