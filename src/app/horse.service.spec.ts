import { TestBed } from '@angular/core/testing';

import { HorseService } from './horse.service';

describe('HorseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HorseService = TestBed.get(HorseService);
    expect(service).toBeTruthy();
  });
});
