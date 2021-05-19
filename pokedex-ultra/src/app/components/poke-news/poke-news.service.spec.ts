import { TestBed } from '@angular/core/testing';

import { PokeNewsService } from './poke-news.service';

describe('PokeNewsService', () => {
  let service: PokeNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
