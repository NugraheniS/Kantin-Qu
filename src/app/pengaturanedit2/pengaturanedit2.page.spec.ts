import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pengaturanedit2Page } from './pengaturanedit2.page';

describe('Pengaturanedit2Page', () => {
  let component: Pengaturanedit2Page;
  let fixture: ComponentFixture<Pengaturanedit2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pengaturanedit2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pengaturanedit2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
