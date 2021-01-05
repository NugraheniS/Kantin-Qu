import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransaksiadminPage } from './transaksiadmin.page';

describe('TransaksiadminPage', () => {
  let component: TransaksiadminPage;
  let fixture: ComponentFixture<TransaksiadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiadminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransaksiadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
