import { TestBed } from '@angular/core/testing';

import { Encrypt } from './encrypt-provider';

describe('Encrypt', () => {
  let service: Encrypt;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Encrypt);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
