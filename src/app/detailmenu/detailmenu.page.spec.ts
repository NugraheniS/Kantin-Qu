import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailmenuPage } from './detailmenu.page';

describe('DetailmenuPage', () => {
  let component: DetailmenuPage;
  let fixture: ComponentFixture<DetailmenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailmenuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailmenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
