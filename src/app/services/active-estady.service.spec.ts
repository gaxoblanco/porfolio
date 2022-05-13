import { TestBed } from '@angular/core/testing';

import { ActiveEstadyService } from './active-estady.service';

describe('ActiveEstadyService', () => {
  let service: ActiveEstadyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveEstadyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
