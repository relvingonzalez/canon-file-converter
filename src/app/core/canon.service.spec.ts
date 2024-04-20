import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { CanonService } from './canon.service';

describe('CanonService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient
    ],
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: CanonService = TestBed.get(CanonService);
    expect(service).toBeTruthy();
  });
});
