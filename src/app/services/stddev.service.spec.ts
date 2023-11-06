import { TestBed } from '@angular/core/testing';

import { StddevService } from './stddev.service';

describe('StddevService', () => {
  let service: StddevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StddevService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});