import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConfigAccordionComponent} from './config-accordion.component';

describe('ConfigAccordionComponent', () => {
  let component: ConfigAccordionComponent;
  let fixture: ComponentFixture<ConfigAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfigAccordionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ConfigAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
