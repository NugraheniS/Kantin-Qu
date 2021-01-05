import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PilihanloginPage } from './pilihanlogin.page';

describe('PilihanloginPage', () => {
  let component: PilihanloginPage;
  let fixture: ComponentFixture<PilihanloginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilihanloginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PilihanloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
