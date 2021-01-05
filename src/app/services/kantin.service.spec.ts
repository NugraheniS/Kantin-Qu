import { TestBed } from '@angular/core/testing';

import { KantinService } from './kantin.service';

describe('KantinService', () => {
  let service: KantinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KantinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
