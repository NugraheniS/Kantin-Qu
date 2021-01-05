import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditkantinPage } from './editkantin.page';

describe('EditkantinPage', () => {
  let component: EditkantinPage;
  let fixture: ComponentFixture<EditkantinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditkantinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditkantinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
