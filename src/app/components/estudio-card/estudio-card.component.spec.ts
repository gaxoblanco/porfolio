import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioCardComponent } from './estudio-card.component';

describe('EstudioCardComponent', () => {
  let component: EstudioCardComponent;
  let fixture: ComponentFixture<EstudioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
