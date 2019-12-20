import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-listado-modal',
  templateUrl: './listado-modal.page.html',
  styleUrls: ['./listado-modal.page.scss'],
})
export class ListadoModalPage implements OnInit {

  constructor(private modalCntrl: ModalController, private navParams: NavParams) { }

  students: Student[];
  typeList: string;

  ngOnInit() {
    this.students = this.navParams.get('studentsList');
    this.typeList = this.navParams.get('typeList');

  }

  async closeModal() {
    await this.modalCntrl.dismiss();
  }



}
