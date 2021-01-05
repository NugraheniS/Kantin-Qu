import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PengaturaneditPage } from './pengaturanedit.page';

describe('PengaturaneditPage', () => {
  let component: PengaturaneditPage;
  let fixture: ComponentFixture<PengaturaneditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PengaturaneditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PengaturaneditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
