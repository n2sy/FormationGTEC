import { TestBed } from '@angular/core/testing';

import { ListePersonneService } from './liste-personne.service';

describe('ListePersonneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListePersonneService = TestBed.get(ListePersonneService);
    expect(service).toBeTruthy();
  });
});
