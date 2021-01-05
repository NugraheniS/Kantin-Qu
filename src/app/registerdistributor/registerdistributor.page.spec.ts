import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterdistributorPage } from './registerdistributor.page';

describe('RegisterdistributorPage', () => {
  let component: RegisterdistributorPage;
  let fixture: ComponentFixture<RegisterdistributorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterdistributorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterdistributorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
