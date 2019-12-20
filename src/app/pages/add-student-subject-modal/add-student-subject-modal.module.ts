import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStudentSubjectModalPageRoutingModule } from './add-student-subject-modal-routing.module';

import { AddStudentSubjectModalPage } from './add-student-subject-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStudentSubjectModalPageRoutingModule
  ],
  declarations: [AddStudentSubjectModalPage]
})
export class AddStudentSubjectModalPageModule {}
