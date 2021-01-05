import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DaftarkantinPage } from './daftarkantin.page';

describe('DaftarkantinPage', () => {
  let component: DaftarkantinPage;
  let fixture: ComponentFixture<DaftarkantinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarkantinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DaftarkantinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
