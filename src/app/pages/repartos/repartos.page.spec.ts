import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepartosPage } from './repartos.page';

describe('RepartosPage', () => {
  let component: RepartosPage;
  let fixture: ComponentFixture<RepartosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepartosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
