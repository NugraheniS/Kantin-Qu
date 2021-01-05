import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaporanadminPage } from './laporanadmin.page';

describe('LaporanadminPage', () => {
  let component: LaporanadminPage;
  let fixture: ComponentFixture<LaporanadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaporanadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaporanadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
