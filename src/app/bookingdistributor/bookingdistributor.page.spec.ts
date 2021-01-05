import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingdistributorPage } from './bookingdistributor.page';

describe('BookingdistributorPage', () => {
  let component: BookingdistributorPage;
  let fixture: ComponentFixture<BookingdistributorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingdistributorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingdistributorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
