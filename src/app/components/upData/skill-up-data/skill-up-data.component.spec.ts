import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillUpDataComponent } from './skill-up-data.component';

describe('SkillUpDataComponent', () => {
  let component: SkillUpDataComponent;
  let fixture: ComponentFixture<SkillUpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillUpDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillUpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
