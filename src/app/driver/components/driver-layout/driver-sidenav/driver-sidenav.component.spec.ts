import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverSidenavComponent } from './driver-sidenav.component';

describe('DriverSidenavComponent', () => {
  let component: DriverSidenavComponent;
  let fixture: ComponentFixture<DriverSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DriverSidenavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriverSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
