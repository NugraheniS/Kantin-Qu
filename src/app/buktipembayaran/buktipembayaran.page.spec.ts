import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuktipembayaranPage } from './buktipembayaran.page';

describe('BuktipembayaranPage', () => {
  let component: BuktipembayaranPage;
  let fixture: ComponentFixture<BuktipembayaranPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuktipembayaranPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuktipembayaranPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
