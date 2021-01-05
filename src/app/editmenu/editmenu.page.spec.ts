import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditmenuPage } from './editmenu.page';

describe('EditmenuPage', () => {
  let component: EditmenuPage;
  let fixture: ComponentFixture<EditmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
