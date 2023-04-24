import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAuthenticationComponent } from './list-authentication.component';

describe('ListAuthenticationComponent', () => {
  let component: ListAuthenticationComponent;
  let fixture: ComponentFixture<ListAuthenticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAuthenticationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAuthenticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
