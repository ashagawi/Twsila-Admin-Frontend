import { TestBed } from '@angular/core/testing';

import { ChangePwdGuard } from './change-pwd.guard';

describe('ChangePwdGuard', () => {
  let guard: ChangePwdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChangePwdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
