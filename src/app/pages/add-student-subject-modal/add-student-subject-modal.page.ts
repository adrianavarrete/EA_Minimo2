import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { Subject } from '../../models/subject';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-add-student-subject-modal',
  templateUrl: './add-student-subject-modal.page.html',
  styleUrls: ['./add-student-subject-modal.page.scss'],
})
export class AddStudentSubjectModalPage implements OnInit {

  id: string;
  private sub: any;
  subjectId:string;
  subject = new Subject();
  student = new Student('', '', '', '', '');
  students: Student[];

  constructor(private studentService: StudentService, private navParams: NavParams, private subjectService: SubjectService, private modalCntrl: ModalController) { }

  ngOnInit() {
    this.subjectId = this.navParams.get('id');
    console.log(this.subjectId);


  }

  async closeModal() {
    await this.modalCntrl.dismiss();
  }

  addStudentInSubject(studentId: string, subjectId: string, _id: string) {

    const data = {
      studentId: studentId,
      subjectId: subjectId
    };

    console.log(data);

    this.subjectService.addStudentInSubject(data).subscribe(res => {
      this.getSubjectDetails(this.id);
      this.closeModal();
    });
  }

  deleteStudentInSubject(studentId: string, subjectId: string, _id: string) {

    const data = {
      studentId: studentId,
      subjectId: subjectId
    };

    console.log(data);

    this.subjectService.deleteStudentInSubject(data).subscribe(res => {
      this.getSubjectDetails(this.id);
    });
  }

  getSubjectDetails(_id: string) {

    this.subjectService.getSubjectDetail(_id)
      .subscribe(res => {
        console.log(res);
        this.subject = res as Subject;
        this.students = this.subject.students;
        console.log(this.students);
      },
        err => {
          console.log(err);
        });
  }

  getStudents() {
    this.studentService.getStudents()
      .subscribe(res => {
        console.log(res);
        this.studentService.students = res as Student[];
      });
  }

}



