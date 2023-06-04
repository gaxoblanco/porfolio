import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindnessComponent } from './blindness.component';

describe('BlindnessComponent', () => {
  let component: BlindnessComponent;
  let fixture: ComponentFixture<BlindnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlindnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlindnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
