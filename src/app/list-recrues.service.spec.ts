import { TestBed } from '@angular/core/testing';

import { ListRecruesService } from './list-recrues.service';

describe('ListRecruesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListRecruesService = TestBed.get(ListRecruesService);
    expect(service).toBeTruthy();
  });
});
