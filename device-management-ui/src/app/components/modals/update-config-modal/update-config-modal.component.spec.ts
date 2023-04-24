import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateConfigModalComponent } from './update-config-modal.component';

describe('UpdateConfigModalComponent', () => {
  let component: UpdateConfigModalComponent;
  let fixture: ComponentFixture<UpdateConfigModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateConfigModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateConfigModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
