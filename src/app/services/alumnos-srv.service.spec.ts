import { TestBed } from '@angular/core/testing';

import { AlumnosSRVService } from './alumnos-srv.service';

describe('AlumnosSRVService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlumnosSRVService = TestBed.get(AlumnosSRVService);
    expect(service).toBeTruthy();
  });
});
