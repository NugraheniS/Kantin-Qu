import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingmakananPage } from './bookingmakanan.page';

describe('BookingmakananPage', () => {
  let component: BookingmakananPage;
  let fixture: ComponentFixture<BookingmakananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingmakananPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingmakananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
