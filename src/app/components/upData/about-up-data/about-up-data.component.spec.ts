import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUpDataComponent } from './about-up-data.component';

describe('AboutUpDataComponent', () => {
  let component: AboutUpDataComponent;
  let fixture: ComponentFixture<AboutUpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUpDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
