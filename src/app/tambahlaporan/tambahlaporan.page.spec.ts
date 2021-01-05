import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahlaporanPage } from './tambahlaporan.page';

describe('TambahlaporanPage', () => {
  let component: TambahlaporanPage;
  let fixture: ComponentFixture<TambahlaporanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahlaporanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahlaporanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
