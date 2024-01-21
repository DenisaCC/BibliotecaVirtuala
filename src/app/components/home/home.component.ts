import { Component, OnInit } from '@angular/core';
import { booksService } from 'src/app/services/book.service';
import { Book } from 'src/app/interfaces/books';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookList: Book[] = []; 
  currentUserID: string | null = null;

  constructor(private bookService: booksService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.loadBookList(); 
   
  }

  loadBookList(): void {
    this.bookService.getAllBooks().subscribe(books => {
      this.bookList = books; 
    });
  }

  confirmDeleteBook(id: string): void {
    const confirmation = window.confirm('Ești sigur că dorești să ștergi cartea?');
    if (confirmation) {
      this.deleteBook(id);
    }
  }
  
  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe(() => {
      this.loadBookList(); 
    });
  }

   logout(): void {
    this.authService.logout(); 
  }
}
