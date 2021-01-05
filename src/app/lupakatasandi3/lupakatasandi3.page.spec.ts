import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lupakatasandi3Page } from './lupakatasandi3.page';

describe('Lupakatasandi3Page', () => {
  let component: Lupakatasandi3Page;
  let fixture: ComponentFixture<Lupakatasandi3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lupakatasandi3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lupakatasandi3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
