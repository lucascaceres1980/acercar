import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComercializadoresPage } from './comercializadores.page';

describe('ComercializadoresPage', () => {
  let component: ComercializadoresPage;
  let fixture: ComponentFixture<ComercializadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComercializadoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComercializadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
