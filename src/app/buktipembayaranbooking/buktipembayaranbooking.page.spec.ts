import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuktipembayaranbookingPage } from './buktipembayaranbooking.page';

describe('BuktipembayaranbookingPage', () => {
  let component: BuktipembayaranbookingPage;
  let fixture: ComponentFixture<BuktipembayaranbookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuktipembayaranbookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuktipembayaranbookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
