import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfildistributorPage } from './profildistributor.page';

describe('ProfildistributorPage', () => {
  let component: ProfildistributorPage;
  let fixture: ComponentFixture<ProfildistributorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfildistributorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfildistributorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
