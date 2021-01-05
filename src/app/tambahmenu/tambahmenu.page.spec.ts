import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahmenuPage } from './tambahmenu.page';

describe('TambahmenuPage', () => {
  let component: TambahmenuPage;
  let fixture: ComponentFixture<TambahmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
