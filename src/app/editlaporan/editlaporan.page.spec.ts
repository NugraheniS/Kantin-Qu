import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditlaporanPage } from './editlaporan.page';

describe('EditlaporanPage', () => {
  let component: EditlaporanPage;
  let fixture: ComponentFixture<EditlaporanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlaporanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditlaporanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
