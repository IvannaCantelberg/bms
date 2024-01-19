import { TestBed } from '@angular/core/testing';

import { AuthWithGoogleService } from './auth-with-google.service';

describe('AuthWithGoogleService', () => {
  let service: AuthWithGoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthWithGoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
