import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepartosDetallePage } from './repartos-detalle.page';

describe('RepartosDetallePage', () => {
  let component: RepartosDetallePage;
  let fixture: ComponentFixture<RepartosDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartosDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepartosDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
