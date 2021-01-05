import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahmakananPage } from './tambahmakanan.page';

describe('TambahmakananPage', () => {
  let component: TambahmakananPage;
  let fixture: ComponentFixture<TambahmakananPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahmakananPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahmakananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
