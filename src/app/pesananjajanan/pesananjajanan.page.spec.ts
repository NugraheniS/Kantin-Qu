import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesananjajananPage } from './pesananjajanan.page';

describe('PesananjajananPage', () => {
  let component: PesananjajananPage;
  let fixture: ComponentFixture<PesananjajananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesananjajananPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesananjajananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
