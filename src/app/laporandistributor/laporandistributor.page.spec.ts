import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaporandistributorPage } from './laporandistributor.page';

describe('LaporandistributorPage', () => {
  let component: LaporandistributorPage;
  let fixture: ComponentFixture<LaporandistributorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaporandistributorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaporandistributorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
