import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverOrderCompletedComponent } from './driver-order-completed.component';

describe('DriverOrderCompletedComponent', () => {
  let component: DriverOrderCompletedComponent;
  let fixture: ComponentFixture<DriverOrderCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverOrderCompletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriverOrderCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
