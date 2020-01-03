import { TestBed } from '@angular/core/testing';

import { OrderMapperService } from './order-mapper.service';

describe('OrderMapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderMapperService = TestBed.get(OrderMapperService);
    expect(service).toBeTruthy();
  });
});
