import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/interfaces/books';
import { booksService } from 'src/app/services/book.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @ViewChild('formularCarte', { static: false }) formularCarte!: NgForm;
  
  newBook: Book = {
    id: '', 
    titlu: '', 
    autor: '', 
    editura: '', 
    an: null, 
    nr: null, 
    categorie: '', 
    descriere: ''
  };
  bookList: Book[] = [];
  

  constructor(
    private bookService: booksService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadBookList();
  }

  loadBookList(): void {
    this.bookService.getAllBooks().subscribe(books => {
      this.bookList = books;
    });
  }

  addBook(): void {
    if (!this.isFormValid()) {
      return;
    }

    this.bookService.addBook(this.newBook).subscribe(() => {
      this.loadBookList();
      this.resetForm();
    });
  }
  
  resetForm(): void {
    this.newBook = {
      id: '', 
      titlu: '', 
      autor: '', 
      editura: '', 
      an: null, 
      nr: null, 
      categorie: '', 
      descriere: ''
    };
    this.formularCarte.resetForm();
  }
  
  isFormValid(): boolean {
    return (
      this.newBook.titlu !== '' &&
      this.newBook.autor !== '' &&
      this.newBook.editura !== '' &&
      this.newBook.an !== null &&
      this.newBook.nr !== null &&
      this.newBook.categorie !== '' &&
      this.newBook.descriere !== ''
    );
  }
}
