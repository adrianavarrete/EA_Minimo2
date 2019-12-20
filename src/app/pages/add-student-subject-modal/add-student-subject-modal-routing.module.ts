import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStudentSubjectModalPage } from './add-student-subject-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddStudentSubjectModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStudentSubjectModalPageRoutingModule {}
