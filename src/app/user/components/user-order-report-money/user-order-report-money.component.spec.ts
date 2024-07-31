import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderReportMoneyComponent } from './user-order-report-money.component';

describe('UserOrderReportMoneyComponent', () => {
  let component: UserOrderReportMoneyComponent;
  let fixture: ComponentFixture<UserOrderReportMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOrderReportMoneyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserOrderReportMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
