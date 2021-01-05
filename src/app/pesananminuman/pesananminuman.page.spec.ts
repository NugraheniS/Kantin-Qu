import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PesananminumanPage } from './pesananminuman.page';

describe('PesananminumanPage', () => {
  let component: PesananminumanPage;
  let fixture: ComponentFixture<PesananminumanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesananminumanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PesananminumanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
