import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailbookingPage } from './detailbooking.page';

describe('DetailbookingPage', () => {
  let component: DetailbookingPage;
  let fixture: ComponentFixture<DetailbookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailbookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailbookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
