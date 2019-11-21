import { TestBed } from '@angular/core/testing';

import { InscritService } from './inscrit.service';

describe('InscritService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InscritService = TestBed.get(InscritService);
    expect(service).toBeTruthy();
  });
});
