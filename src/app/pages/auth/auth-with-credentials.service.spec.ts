import { TestBed } from '@angular/core/testing';

import { AuthWithCredentialsService } from './auth-with-credentials.service';

describe('AuthWithCredentialsService', () => {
  let service: AuthWithCredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthWithCredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
