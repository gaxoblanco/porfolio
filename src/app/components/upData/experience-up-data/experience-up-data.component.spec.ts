import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceUpDataComponent } from './experience-up-data.component';

describe('ExperienceUpDataComponent', () => {
  let component: ExperienceUpDataComponent;
  let fixture: ComponentFixture<ExperienceUpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceUpDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceUpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
