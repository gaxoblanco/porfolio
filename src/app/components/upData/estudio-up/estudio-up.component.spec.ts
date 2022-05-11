import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioUpComponent } from './estudio-up.component';

describe('EstudioUpComponent', () => {
  let component: EstudioUpComponent;
  let fixture: ComponentFixture<EstudioUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudioUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
