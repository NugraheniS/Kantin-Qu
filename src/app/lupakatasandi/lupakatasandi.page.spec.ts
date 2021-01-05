import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LupakatasandiPage } from './lupakatasandi.page';

describe('LupakatasandiPage', () => {
  let component: LupakatasandiPage;
  let fixture: ComponentFixture<LupakatasandiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LupakatasandiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LupakatasandiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
