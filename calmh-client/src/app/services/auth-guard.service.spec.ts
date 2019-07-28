import { TestBed } from '@angular/core/testing';

import { AuthorizationGuardService } from './auth-guard.service';

describe('AuthorizationGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorizationGuardService = TestBed.get(AuthorizationGuardService);
    expect(service).toBeTruthy();
  });
});
