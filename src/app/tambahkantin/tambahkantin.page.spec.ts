import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahkantinPage } from './tambahkantin.page';

describe('TambahkantinPage', () => {
  let component: TambahkantinPage;
  let fixture: ComponentFixture<TambahkantinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahkantinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahkantinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
