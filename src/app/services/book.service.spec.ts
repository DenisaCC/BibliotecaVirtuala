import { TestBed } from '@angular/core/testing';

import { booksService } from 'src/app/services/book.service';

describe('BookService', () => {
  let service: booksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(booksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
