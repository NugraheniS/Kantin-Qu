import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KantinbunurulPage } from './kantinbunurul.page';

describe('KantinbunurulPage', () => {
  let component: KantinbunurulPage;
  let fixture: ComponentFixture<KantinbunurulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KantinbunurulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KantinbunurulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
