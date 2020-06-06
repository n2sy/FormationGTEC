import { TestBed } from '@angular/core/testing';

import { ListAccountsService } from './list-accounts.service';

describe('ListAccountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListAccountsService = TestBed.get(ListAccountsService);
    expect(service).toBeTruthy();
  });
});
