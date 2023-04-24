import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicePasswordModalComponent } from './device-password-modal.component';

describe('DevicePasswordModalComponent', () => {
  let component: DevicePasswordModalComponent;
  let fixture: ComponentFixture<DevicePasswordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicePasswordModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevicePasswordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
