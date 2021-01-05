import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesananmakananPage } from './pesananmakanan.page';

describe('PesananmakananPage', () => {
  let component: PesananmakananPage;
  let fixture: ComponentFixture<PesananmakananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesananmakananPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesananmakananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
