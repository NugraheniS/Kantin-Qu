import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenukantinbunurulPage } from './menukantinbunurul.page';

describe('MenukantinbunurulPage', () => {
  let component: MenukantinbunurulPage;
  let fixture: ComponentFixture<MenukantinbunurulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenukantinbunurulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenukantinbunurulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
