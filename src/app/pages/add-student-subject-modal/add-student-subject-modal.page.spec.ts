import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddStudentSubjectModalPage } from './add-student-subject-modal.page';

describe('AddStudentSubjectModalPage', () => {
  let component: AddStudentSubjectModalPage;
  let fixture: ComponentFixture<AddStudentSubjectModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudentSubjectModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddStudentSubjectModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
