import { TestBed } from '@angular/core/testing';

import { GenerationsService } from './generations.service';

describe('GenerationsService', () => {
  let service: GenerationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
