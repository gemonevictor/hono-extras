import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceRpkModalComponent } from './device-rpk-modal.component';

describe('DeviceRpkModalComponent', () => {
  let component: DeviceRpkModalComponent;
  let fixture: ComponentFixture<DeviceRpkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceRpkModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceRpkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
