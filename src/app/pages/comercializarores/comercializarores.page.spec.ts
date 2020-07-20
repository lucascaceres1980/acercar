import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComercializaroresPage } from './comercializarores.page';

describe('ComercializaroresPage', () => {
  let component: ComercializaroresPage;
  let fixture: ComponentFixture<ComercializaroresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComercializaroresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComercializaroresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
