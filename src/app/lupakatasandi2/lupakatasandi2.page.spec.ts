import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lupakatasandi2Page } from './lupakatasandi2.page';

describe('Lupakatasandi2Page', () => {
  let component: Lupakatasandi2Page;
  let fixture: ComponentFixture<Lupakatasandi2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lupakatasandi2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lupakatasandi2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
