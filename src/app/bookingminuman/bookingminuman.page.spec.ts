import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingminumanPage } from './bookingminuman.page';

describe('BookingminumanPage', () => {
  let component: BookingminumanPage;
  let fixture: ComponentFixture<BookingminumanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingminumanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingminumanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
