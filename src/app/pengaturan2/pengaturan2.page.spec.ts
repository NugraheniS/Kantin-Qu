import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pengaturan2Page } from './pengaturan2.page';

describe('Pengaturan2Page', () => {
  let component: Pengaturan2Page;
  let fixture: ComponentFixture<Pengaturan2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pengaturan2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pengaturan2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
