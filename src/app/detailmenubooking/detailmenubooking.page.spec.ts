import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailmenubookingPage } from './detailmenubooking.page';

describe('DetailmenubookingPage', () => {
  let component: DetailmenubookingPage;
  let fixture: ComponentFixture<DetailmenubookingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailmenubookingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailmenubookingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
