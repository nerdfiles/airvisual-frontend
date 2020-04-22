import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfigurePage } from './configure.page';

describe('ConfigurePage', () => {
  let component: ConfigurePage;
  let fixture: ComponentFixture<ConfigurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigurePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
