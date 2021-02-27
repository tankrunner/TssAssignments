import { TestBed } from '@angular/core/testing';

import { DloginGuard } from './dlogin.guard';

describe('DloginGuard', () => {
  let guard: DloginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DloginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
