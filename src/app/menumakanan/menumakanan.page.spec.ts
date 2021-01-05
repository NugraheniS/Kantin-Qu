import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenumakananPage } from './menumakanan.page';

describe('MenumakananPage', () => {
  let component: MenumakananPage;
  let fixture: ComponentFixture<MenumakananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenumakananPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenumakananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
