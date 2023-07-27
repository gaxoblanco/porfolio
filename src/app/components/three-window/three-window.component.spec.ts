import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeWindowComponent } from './three-window.component';

describe('ThreeWindowComponent', () => {
  let component: ThreeWindowComponent;
  let fixture: ComponentFixture<ThreeWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeWindowComponent]
    });
    fixture = TestBed.createComponent(ThreeWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
