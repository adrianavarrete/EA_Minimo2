import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListadoModalPage } from './listado-modal.page';

describe('ListadoModalPage', () => {
  let component: ListadoModalPage;
  let fixture: ComponentFixture<ListadoModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
