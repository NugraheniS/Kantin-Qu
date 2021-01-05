import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookingjajananPage } from './bookingjajanan.page';

describe('BookingjajananPage', () => {
  let component: BookingjajananPage;
  let fixture: ComponentFixture<BookingjajananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingjajananPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookingjajananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
