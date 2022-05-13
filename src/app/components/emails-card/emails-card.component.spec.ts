import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsCardComponent } from './emails-card.component';

describe('EmailsCardComponent', () => {
  let component: EmailsCardComponent;
  let fixture: ComponentFixture<EmailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
