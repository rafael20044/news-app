import { TestBed } from '@angular/core/testing';

import { ToastProvide } from './toast-provide';

describe('ToastProvide', () => {
  let service: ToastProvide;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToastProvide);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
