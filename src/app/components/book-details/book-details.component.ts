import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { booksService } from 'src/app/services/book.service';
import { Book } from 'src/app/interfaces/books';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookId: string | null = null; 
  bookDetails: Book | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookService: booksService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('ID-ul cărții:', id);
      if (id) {
        this.bookId = id; 
        this.getBookDetails(this.bookId);
      }
    });
  }

  getBookDetails(id: string): void {
    this.bookService.getBookById(id).subscribe(book => {
      this.bookDetails = book; 
    });
  }
}
