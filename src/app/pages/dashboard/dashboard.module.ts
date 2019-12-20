import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { AddStudentModalPage } from '../add-student-modal/add-student-modal.page';
import { AddSubjectModalPage } from '../add-subject-modal/add-subject-modal.page';
import { DetalleAsignaturaPage } from '../detalle-asignatura/detalle-asignatura.page';
import { ListadoModalPage } from '../listado-modal/listado-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, AddStudentModalPage, AddSubjectModalPage,  ListadoModalPage],
  entryComponents: [AddStudentModalPage, AddSubjectModalPage,  ListadoModalPage]
})
export class DashboardPageModule {}
