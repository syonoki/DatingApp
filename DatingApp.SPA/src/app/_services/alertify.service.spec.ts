/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AleartifyService } from './aleartify.service';

describe('Service: Aleartify', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AleartifyService]
    });
  });

  it('should ...', inject([AleartifyService], (service: AleartifyService) => {
    expect(service).toBeTruthy();
  }));
});