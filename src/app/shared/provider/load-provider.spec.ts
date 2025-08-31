import { TestBed } from '@angular/core/testing';

import { LoadProvider } from './load-provider';

describe('LoadProvider', () => {
  let service: LoadProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
