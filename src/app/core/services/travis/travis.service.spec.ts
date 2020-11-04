import { TestBed } from '@angular/core/testing';

import { TravisService } from './travis.service';

describe('TravisService', () => {
  let service: TravisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
