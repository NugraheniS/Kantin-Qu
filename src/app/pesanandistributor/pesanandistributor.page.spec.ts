import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesanandistributorPage } from './pesanandistributor.page';

describe('PesanandistributorPage', () => {
  let component: PesanandistributorPage;
  let fixture: ComponentFixture<PesanandistributorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesanandistributorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesanandistributorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
