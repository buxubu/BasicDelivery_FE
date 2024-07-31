import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderLostComponent } from './user-order-lost.component';

describe('UserOrderLostComponent', () => {
  let component: UserOrderLostComponent;
  let fixture: ComponentFixture<UserOrderLostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOrderLostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserOrderLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
