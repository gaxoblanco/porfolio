import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudyPostComponent } from './estudy-post.component';

describe('EstudyPostComponent', () => {
  let component: EstudyPostComponent;
  let fixture: ComponentFixture<EstudyPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudyPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
