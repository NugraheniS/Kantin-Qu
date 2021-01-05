import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakananbunurulPage } from './makananbunurul.page';

describe('MakananbunurulPage', () => {
  let component: MakananbunurulPage;
  let fixture: ComponentFixture<MakananbunurulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakananbunurulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakananbunurulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
