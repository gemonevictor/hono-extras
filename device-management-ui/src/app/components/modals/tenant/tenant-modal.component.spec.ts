import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantModalComponent } from './tenant-modal.component';

describe('CreateTenantComponent', () => {
  let component: TenantModalComponent;
  let fixture: ComponentFixture<TenantModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenantModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
