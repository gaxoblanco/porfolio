import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencePostComponent } from './experience-post.component';

describe('ExperiencePostComponent', () => {
  let component: ExperiencePostComponent;
  let fixture: ComponentFixture<ExperiencePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperiencePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
