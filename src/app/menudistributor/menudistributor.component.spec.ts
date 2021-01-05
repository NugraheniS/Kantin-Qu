import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenudistributorComponent } from './menudistributor.component';

describe('MenudistributorComponent', () => {
  let component: MenudistributorComponent;
  let fixture: ComponentFixture<MenudistributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenudistributorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenudistributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
