import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject';
import { Student } from '../../models/student';
import { Phone } from '../../models/phone';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { StudentService } from '../../services/student.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-subject-modal',
  templateUrl: './add-subject-modal.page.html',
  styleUrls: ['./add-subject-modal.page.scss'],
})
export class AddSubjectModalPage implements OnInit {

  subjectForm: FormGroup;
  formBuilder: any;
  phones: Phone[] = [];
  studies: String[] = [];
  student = new Student('', '', '', '', '');
  studentsTelecos: Student[];
  studentsTelematica: Student[];
  studentsAeros: Student[];

  singleSubject = new Subject();
  add: boolean;

  constructor(private modalCntrl: ModalController, private subjectService: SubjectService) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCntrl.dismiss();
  }


  addSubject(form: NgForm) {
    console.log(form.value);
    this.subjectService.postSubject(form.value)
      .subscribe(res => {
        console.log(res);
        this.resetForm(form);
        this.getSubjects();

      });

    this.closeModal();

  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }


  getSubjects() {
    this.subjectService.getSubjects()
      .subscribe(res => {
        console.log(res);
        this.subjectService.subjects = res as Subject[];
      });
  }

}
