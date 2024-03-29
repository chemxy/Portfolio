import { TestBed } from '@angular/core/testing';

import { DaynightService } from './daynight.service';

describe('DaynightService', () => {
  let service: DaynightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaynightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
