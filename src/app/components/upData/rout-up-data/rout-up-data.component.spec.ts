import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutUpDataComponent } from './rout-up-data.component';

describe('RoutUpDataComponent', () => {
  let component: RoutUpDataComponent;
  let fixture: ComponentFixture<RoutUpDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutUpDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutUpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
