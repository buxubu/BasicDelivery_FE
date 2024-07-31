import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderSearchComponent } from './user-order-search.component';

describe('UserOrderSearchComponent', () => {
  let component: UserOrderSearchComponent;
  let fixture: ComponentFixture<UserOrderSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOrderSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserOrderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
