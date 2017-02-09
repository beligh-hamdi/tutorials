/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EbooksService } from './ebooks.service';

describe('EbooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EbooksService]
    });
  });

  it('should ...', inject([EbooksService], (service: EbooksService) => {
    expect(service).toBeTruthy();
  }));
});
