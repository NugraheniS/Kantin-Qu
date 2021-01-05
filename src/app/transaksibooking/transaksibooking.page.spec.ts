import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransaksibookingPage } from './transaksibooking.page';

describe('TransaksibookingPage', () => {
  let component: TransaksibookingPage;
  let fixture: ComponentFixture<TransaksibookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksibookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransaksibookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
