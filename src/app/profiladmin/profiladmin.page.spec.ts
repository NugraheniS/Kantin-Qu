import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfiladminPage } from './profiladmin.page';

describe('ProfiladminPage', () => {
  let component: ProfiladminPage;
  let fixture: ComponentFixture<ProfiladminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfiladminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfiladminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
