import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogindistributorPage } from './logindistributor.page';

describe('LogindistributorPage', () => {
  let component: LogindistributorPage;
  let fixture: ComponentFixture<LogindistributorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogindistributorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogindistributorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
