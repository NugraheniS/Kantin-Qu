import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Laporanadmin2Page } from './laporanadmin2.page';

describe('Laporanadmin2Page', () => {
  let component: Laporanadmin2Page;
  let fixture: ComponentFixture<Laporanadmin2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Laporanadmin2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Laporanadmin2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
