import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAsignaturaPageRoutingModule } from './detalle-asignatura-routing.module';

import { DetalleAsignaturaPage } from './detalle-asignatura.page';
import { UpdateEstudiantesPage } from '../update-estudiantes/update-estudiantes.page';
import { AddStudentSubjectModalPage } from '../add-student-subject-modal/add-student-subject-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAsignaturaPageRoutingModule
  ],
  declarations: [ DetalleAsignaturaPage, AddStudentSubjectModalPage],
  entryComponents: [ AddStudentSubjectModalPage]
})
export class DetalleAsignaturaPageModule {}
